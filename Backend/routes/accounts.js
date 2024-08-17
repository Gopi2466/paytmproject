const express = require("express");
const { authMiddleware } = require("../middleware");
const router = express.Router();
const{ default: mongoose } = require("mongoose")
const { Account } = require("../db")

router.get("/balance",authMiddleware, async function(req, res) {
    try {
    const userAccount = await Account.findOne({userId: req.userId});
    res.status(200).json({
        balance: userAccount.balance
    })
    }
    catch(err) {
        res.status(411).json({
            msg:"Error occured while retrieving the balance."
        })
    }
});

// Bad Solution.
// router.post("/transfer", authMiddleware, async function(req, res) {
//     const { amount , to } = req.body;

//     const userAccount = await Account.findOne({
//         userId: req.userId
//     })
//     if(userAccount.balance < amount) {
//         res.status(400).json({
//             message:"Insufficient balance"
//         })

//     }

//     const transferAccount = await Account.findOne({
//         userId: to
//     })
//     if(!transferAccount) {
//         res.status(400).json({
//             message:"Invalid Account"
//         })
//     }

//     await Account.updateOne({
//         userId: req.userId
//     }, {
//         $inc:{
//             balance: -amount
//         }
//     })

//     await Account.updateOne({
//         userId: to
//     }, {
//         $inc: {
//             balance: amount
//         }
//     })
// res.status(200).json({
//     message:"Transfer successfully."
// })


// })

// Good Solution

router.post("/transfer", authMiddleware, async function(req,res) {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { amount, to } = req.body;
    // fetch teh accounts within the transaction
    const account = await Account.findOne({
        userId: req.userId
    }).session(session);

    if(!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message:"Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({userId: to}).session(session);

    if(!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid account"
        });
    }

    await Account.updateOne({userId: req.userId}, {$inc:{ balance: -amount}}).session(session);
    await Account.updateOne({userId: to}, {$inc: {balance: amount}}).session(session);

    //commit the transaction

    await session.commitTransaction();
    res.json({
        message:"Transfer successful."
    });

});


module.exports = router;

