const mongoose = require("mongoose");

const UserScheme = mongoose.Schema({
    firstname : {
        type: String,
        require: true,
    },
    lastname : {
        type: String,
        require: true,
    },
    email : {
        type: String,
        require: true,
        unique: true,
    },
    phone : {
        type: String,
        require: true,
        unique: true,
    },
    password : {
        type: String,
        require: true,
    }
});
const User = mongoose.model("user", UserScheme);
module.exports = User;