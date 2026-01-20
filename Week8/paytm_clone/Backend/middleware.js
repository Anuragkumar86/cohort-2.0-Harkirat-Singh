const {JWT_SECRET} = require("./config")

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(405).json({
            msg: "Invalid Token"
        })
    }

    const token = authHeader.split(' ')[1];

    try {

        const verified = jwt.verify(token, JWT_SECRET);

        if (verified.userId) {
            req.userId = verified.userId;
            next();
        }
        else {
            return res.status(401).json({
                msg: "Invalid Token Payload"
            });
        }
    } catch (err) {
        return res.status(404).json({
            msg: "Sorry You are Not verified. Token not matched"
        })
    }
}

module.exports = {
    authMiddleware
}