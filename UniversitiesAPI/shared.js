const jwt = require("jsonwebtoken");
const Constants = require("./constants");
const bcrypt = require("bcrypt");
const User = require("./model/usermodel");
const Uni = require("./model/unimodel")


let getUserByUsername = (exports.getUserByUsername = async function (username) {
    try {
        // const allUsers = await jsonfile.readFile(users);
        // const filteredUserArray = allUsers.filter(
        //     (user) => user.username === username
        // );
        User.findOne({ username: username }, function (err, usern) {
            if (err) {
                console.log("Error reading users: ", err)
            }
            else {
                return usern.getUsername()
            }
        })
    } catch (err) {
        console.log("Error reading users: ", err.message);
    }
});


const getUsernameFromToken = (token) => jwt.decode(token)["sub"];


exports.generateToken = async function (prevToken, username) {
    try {
        const name = await username || getUsernameFromToken(prevToken);

      

        const options = {
            algorithm: process.env.ALGORITHM,
            expiresIn: process.env.EXPIRY,
            issuer: process.env.ISSUER,
            subject: username || name,
            audience: Constants.JWT_OPTIONS.AUDIENCE
        }

        return jwt.sign({}, process.env.SECRET, options)
    }
    catch(err) {
        console.log(err)
    }

}

exports.passUserId = (req, res, next) => {
    const token = req.cookies.token;
    req.user = jwt.verify(token, process.env.SECRET).user;
    next();
}

exports.verifyToken = (req, res, next) => {
    try{
    const token = req.cookies.token;
    if (!token) {
        res.status(401).send("Not authorised to view")
    } else {
        jwt.verify(token, process.env.SECRET, function (err) {
            if (err) {
                res.clearCookie("token")
                res.status(401).send("Please Login Again")
            }
            else next();
        })
    }
}
catch(error){
    res.status(500).send("Token expired")
}
}


