const jwt = require("jsonwebtoken")
require("dotenv").config

    const generateToken = (payload) => {
        const token = jwt.sign(payload, process.env.SECRET,{algorithm:"HS256"})
        return token;
    }

    const decodeToken = (token) => {
        const decoded = jwt.decode(token)
        return decoded;
    }



module.exports = {generateToken,decodeToken}