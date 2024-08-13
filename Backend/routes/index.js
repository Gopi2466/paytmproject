const express = require("express");

const router = express.Router();
const userRouter = require("./user")
module.exports = router;


router.use("/user", userRouter);

// In this file we are exporting a router and which ever
// file needs it can use it.