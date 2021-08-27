require("dotenv").config({ path: "./variables.env" })
const express = require('express');
const Constants = require('./constants')
// const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const app = express();
const uniRoute = express.Router();
const loginRoute = express.Router();
const logoutRoute = express.Router();
const bcrypt = require("bcrypt");
const uni = require('./model/unimodel.js');
const User = require('./model/usermodel');
const cookieParser = require('cookie-parser');
const {
    generateToken,
    verifyToken
} = require('./shared');
const { verify } = require("jsonwebtoken");
mongoose.connect('mongodb+srv://samatar:1776USA@samatar.43ebf.mongodb.net/Samatar?retryWrites=true&w=majority', function (err) {
    if (err) {
        console.log("error in connection")
    }
    else {
        console.log("Mongo connected")
    }
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// var corsOptions = {
//     optionsSuccessStatus: 200
// }

const port = process.env.PORT || 3000;

const univRouter = require('./routes/univRouter')(uni);

// app.use(cors(corsOptions));



app.get('/', (req, res) => {
    res.send('Welcome');
})

app.use('/api', loginRoute)
app.use('/api', logoutRoute);

loginRoute.route("/login")
    .post((req, res) => {
        
        let uname = req.body.username
        let password = req.body.password
        User.findOne({ username: uname }, function (err, username) {
            try {
                if (username.checkUser(uname)) {
                    username.comparePassword(password, function (err, isMatch) {
                        if (err) throw err;
                        if (!isMatch) {
                            res.status(401).send({ message: "wrong password" })
                        }
                        else {
                            const options = {
                                algorithm: process.env.ALGORITHM,
                                expiresIn: process.env.EXPIRY,
                                issuer: process.env.ISSUER,
                                subject: uname,
                                audience: Constants.JWT_OPTIONS.AUDIENCE
                            }

                            const payload = {
                                user: {
                                    id: username.id
                                }
                            };

                            jwt.sign(
                                payload,
                                process.env.SECRET,
                                options,
                                (err, token) => {
                                    if (err) throw err;
                                    else {
                                        res.cookie("token", token, { httpOnly: true });
                                        res.status(200).send(username)
                                    }
                                }
                            )
                            // generateToken(null, uname).then((token) => {
                            //     res.cookie("token", token, { httpOnly: true });
                            //     res.status(200).send({ username:username })
                            // })

                        }
                    })
                }
                else {
                    res.status(401).send({ message: "user not available" });
                }
            }
            catch(err){
                res.status(500).send("Server Error")
            }
    }

    )}
    )

logoutRoute.route('/logout')
    .get(verifyToken, (req, res) => {
        res.clearCookie("token");
        res.status(200).send("Cookies cleared")
    })



app.use('/api', univRouter);

app.listen(port, () => {
    console.log("Started at port " + port);
})