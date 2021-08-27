const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const {
    getUsernameFromToken,
    getUserByUsername,
    generateToken,
    verifyToken,
    passUserId
} = require("../shared");

const User = require('../model/usermodel')


function routes(Uni) {
    const univRouter = express.Router();

    univRouter.route('/uni')
        .post([verifyToken, passUserId], (req, res) => {
            // const uni = new Uni(req.body);
            const {name, region, rank} = req.body;
            const uni = new Uni({
                name,
                region,
                rank,
                userId:req.user.id
            })
            req.body = uni;
            uni.save();
            res.status(200).json(req.body);
            // generateToken(req.cookies.token, null).then((token) => {
            //     res.cookie("token", token, { httpOnly: true });
            //     uni.save();
            //     res.status(201).json(req.body);
            // })
        }
        )
        .get([verifyToken, passUserId], (req, res) => {
            const query = {};
            if (req.query.region) {
                query.region = req.query.region;
            }

            Uni.find({userId:req.user.id}, (err, values) => {
                if (err) { 
                    return res.send(err)
                } else {
                    generateToken(req.cookies.token, null).then((token) => {
                        res.cookie("token", token, { httpOnly: true });
                        res.json(values);

                    })
                }
            }
            )
        }
        )


univRouter.use('/uni/:uniID', (req, res, next) => {
                Uni.findById(req.params.uniID, (err, values) => {
                    if (err) {
                        res.send(err);
                    }
                    if (values) {
                        req.values = values;
                        return next();
                    }
                    else {
                        res.status(404);
                    }
                })
            })

            univRouter.route('/uni/:uniID')
                .get((req, res) => {
                    res.json(req.values)
                })
                .put((req, res) => {
                    const { values } = req.body;
                    values.name = req.body.name;
                    values.region = req.body.region;
                    values.rank = req.body.rank;
                    req.values.save((err, values) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            values.save((err, value) => {
                                if (err) {
                                    return res.send(err)
                                }
                                return res.json(value)
                            })
                        }
                    })


                })
                .patch((res, req) => {
                    const { values } = req.body;

                    if (req.body._id) {
                        delete req.body._id;
                    }

                    Object.entries(req.body).forEach(item => {
                        const key = item[0];
                        const value = item[1];

                        values[key] = value;
                        req.values.save(err => {
                            if (err) {
                                return res.send(err);
                            }
                            return res.json(values);
                        })
                    })
                })
                .delete((req, res) => {
                    req.values.remove(err => {
                        if (err) {
                            res.send(err);
                        }
                        return res.sendStatus(200);
                    });
                })

            return univRouter;
        }
    

module.exports = routes;