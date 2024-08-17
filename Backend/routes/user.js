const express = require("express");
const zod = require("zod");
const router = express.Router();
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
const { User, Account } = require("../db")
const authMiddleware = require("../middleware")

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    firstName: zod.string().max(50),
    lastName: zod.string().max(50)
})

router.post("/signup",async function(req,res) {
    const userData = req.body;
    const response = signupSchema.safeParse(userData);
    if(!response) {
        return res.status(411).json({msg: "Inputs are invalid"})
    }
    const existingUser = await User.findOne({
        username: userData.username
    })
    if(existingUser)
    {
        return res.status(411).json({
            message:"Email already taken / incorrect inputs"
        })
    }
    const user = await User.create({
        username: userData.username,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName
    })
    const userId = user._id;
    await Account.create({
        userId,
        balance: 1 + Math.random()*10000
    })
    const token = jwt.sign({ userId }, JWT_SECRET)
    res.status(200).json({
        message:"User created successfully",
        token: token
    })
   
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post("/signin", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const { success } = signinBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Incorrect inputs"
        })
    }
    const userExists = await User.findOne({username: username,
        password: password
    })
    if (userExists){
        const token = jwt.sign({
            userId: userExists._id
        }, JWT_SECRET);
        return res.status(200).json({
            token: token
        })
    }
    res.status(411).json({
        message: "Error while logging in."
    })
})
const updateBody = zod.object({
    password: zod.string().min(8),
    firstName: zod.string(),
    lastName: zod.string()
})

// router.put("/", authMiddleware, async (req, res) => {
//     const { success } = updateBody.safeParse(req.body);
//     if (!success) {
//         res.status(411).json({
//             message: "Error while updating information"
//         })
//     }
//     await User.updateOne(req.body, { _id: req.userId})
   
//     res.json({
//         message:"Updated successfully"
//     })
// });

router.get("/bulk", async function(req, res) {
    // query parameters.
    const filter = req.query.filter || "";
try{
    const users = await User.find({
        $or:[{firstName: {"$regex":filter}}, {lastName: {"$regex":filter}}]
});
res.status(200).json({
    users: users.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id
    }))
});
    
}
catch(err) {
    res.status(411).json({})
}
})



module.exports = router;