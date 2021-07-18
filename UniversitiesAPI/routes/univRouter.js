const express = require('express');

function routes(Uni) {
    const univRouter = express.Router();

    univRouter.route('/uni')
        .post((req, res) => {
            const uni = new Uni(req.body);
            req.body = uni;
            uni.save();
            return res.status(201).json(req.body);
        }
        )
        .get((req, res) => {
            const query = {};
            if (req.query.region) {
                query.region = req.query.region;
            }

            Uni.find(query, (err, values) => {
                if (err) {
                    return res.send(err)
                } else {
                    return res.json(values);
                }
            })

        })

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
            return res.json(req.values);
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
                    req.values.save((err, value) => {
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
                return res.sendStatus(204);
            });
        })

    return univRouter;
}

module.exports = routes;