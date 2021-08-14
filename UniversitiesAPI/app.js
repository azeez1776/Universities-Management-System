require("dotenv").config({ path: "./variables.env" })
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const uniRoute = express.Router();
const loginRoute = express.Router();
const bcrypt = require("bcrypt");
const uni = require('./model/unimodel.js');
const User = require('./model/usermodel');
const cookieParser = require('cookie-parser');
const {
    generateToken
} = require('./shared')
mongoose.connect('mongodb://localhost/UniAPI', function (err) {
    if (err) {
        console.log("error in connection")
    }
    console.log("Mongo connected")
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    optionsSuccessStatus: 200
}

const port = process.env.PORT || 3000;

const univRouter = require('./routes/univRouter')(uni);

app.use(cors(corsOptions));



app.get('/', (req, res) => {
    res.send('Welcome');
})

app.use('/api', loginRoute)

loginRoute.route("/login")
    .post((req, res) => {
        let uname = req.body.username
        let password = req.body.password
        User.findOne({ username: 'samatar' }, function (err, username) {
            if (username.checkUser(uname)) {
                username.comparePassword(password, function (err, isMatch) {
                    if (err) throw err;
                    if (!isMatch) {
                        res.send("bad")
                    }
                    else {
                        generateToken(null, "samatar").then((token) => {
                            res.cookie("token", token, { httpOnly: true });
                            res.status(200).send({ username: username })
                        })
                    }
                })
            }
            else {
                res.send("user not available")
            }
        })

    })


app.use('/api', univRouter);

app.listen(port, () => {
    console.log("Started at port " + port);
})