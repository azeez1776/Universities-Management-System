const mongoose = require('mongoose');

const { Schema } = mongoose;

const unimodel = new Schema(
    {
        name: { type: String },
        region: { type: String },
        rank: { type: Number }
    }
);

module.exports = mongoose.model('Uni', unimodel, "uni");