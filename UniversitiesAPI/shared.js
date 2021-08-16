const jwt = require("jsonwebtoken");
const Constants = require("./constants");
const bcrypt = require("bcrypt");
const User = require("./model/usermodel");


let getUserByUsername = (exports.getUserByUsername = async function (username) {
    try {
        // const allUsers = await jsonfile.readFile(users);
        // const filteredUserArray = allUsers.filter(
        //     (user) => user.username === username
        // );
        User.findOne({username:username}, function(err, usern){
            if(err){
                console.log("Error reading users: ", err)
            }
            else{
                return usern.getUsername()
            }
        })
    } catch (err) {
        console.log("Error reading users: ", err.message);
    }
});


const getUsernameFromToken = (token) => jwt.decode(token)["sub"];
   



exports.generateToken = async function (prevToken, username) {
    try{
    const name = await username || getUsernameFromToken(prevToken);
    // const user = await getUserByUsername(name);
    const options = {
        algorithm: process.env.ALGORITHM,
        expiresIn: process.env.EXPIRY,
        issuer: process.env.ISSUER,
        subject: username || name,
        audience: Constants.JWT_OPTIONS.AUDIENCE
    }

    return jwt.sign({}, process.env.SECRET, options)
    }
catch{
    const name = username || getUsernameFromToken(prevToken);
    const user = await getUserByUsername("samatar");
    console.log(user, name)
    console.log(getUsernameFromToken(prevToken))
}

}

exports.verifyToken = (req, res, next) => {
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

// exports.verifyToken = function(req, res, next){
//     const bearerHeader = req.headers['authorization'];
//     if(typeof bearerHeader !== 'undefined'){
//         const bearerToken = bearerHeader.split(' ')[1];
//         req.token = bearerToken;
//         next()
//     }
//     else{
//         res.status(403).send("opium")
//     }
// }