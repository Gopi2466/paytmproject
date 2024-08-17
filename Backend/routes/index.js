const express = require("express");


const userRouter = require("./user")
const accountRouter = require("./accounts")
const router = express.Router();


router.use("/user", userRouter);
router.use("/account", accountRouter);

// In this file we are exporting a router and which ever
// file needs it can use it.
module.exports = router;