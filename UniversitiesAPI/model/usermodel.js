const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const {Schema} = mongoose;

const usermodel = new Schema(
    {
        username:{type:String},
        key:{type:String}
    }
);

usermodel.methods.comparePassword = function(userPass, cb){
    bcrypt.compare(userPass, this.key, function(err, isMatch){
        if(err) return cb(err)
        cb(null, isMatch)

    })
}

usermodel.methods.checkUser = function(user){
    return user === this.username
}

usermodel.methods.getUsername = function(){
    return this.username
}

module.exports = mongoose.model("User", usermodel)