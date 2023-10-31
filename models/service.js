const mongoose = require("mongoose");

const ServiceScheme = mongoose.Schema({
    serviceName : {
        type: String,
        unique: true,
        require: true,
    },
    description : {
        type: String,
        require: true,
    },
    active : {
        type: Boolean,
        default: true,
        require: true,
    },
    createAt : {
        type: Date,
        default: Date.now,
        require: true,
    },
    avatar : {
        type: String,
    }
});
const Service = mongoose.model("service", ServiceScheme);
module.exports = Service;