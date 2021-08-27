const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const unimodel = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        name: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: true
        },
        rank: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        },
    }
);

module.exports = mongoose.model('Uni', unimodel, "uni");
