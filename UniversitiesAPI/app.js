const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const uniRoute = express.Router();
const db = mongoose.connect('mongodb://localhost/UniAPI', { useNewUrlParser: true });
// const bodyParser = require('body-parser');

const uni = require('./model/unimodel.js');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    optionsSuccessStatus: 200
}

const port = process.env.PORT || 3000;

const univRouter = require('./routes/univRouter')(uni);

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send("Hello");
})

// uniRoute.route("/uni")
//     .get((req, res) => {
//         uni.find((err, values) => {
//             if (err) {
//                 return res.send(err);
//             } else {
//                 return res.json(values);
//             }
//         })
//     })

//     .post((req, res) => {
//         const university = new uni(req.body);
//         university.save();

//         return res.status(201).json(university);
//     })

app.use('/api', univRouter);

app.listen(port, () => {
    console.log("Started at port " + port);
})