const { JWT_SECRET } = require("./config")
const jwt = require("jsonwebtoken");
function authMiddleware(req, res, next) {
    const authtoken = req.headers.authorization;
    if(!authtoken || !authtoken.startsWith("Bearer ")){
        return res.status(403).json({})
    }
    const token = authtoken.split(" ")[1];
   
    try {
    const verifytoken = jwt.verify(token, JWT_SECRET);
        req.userId = verifytoken.userId; // understand this concept.
    next();
    }
    catch(err) {
        res.status(403).json({})
    }

}

module.exports = {
    authMiddleware
};