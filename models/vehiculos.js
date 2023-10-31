const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    referencia: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    cilindraje: {
        type: String,
        required: true,
    },
    disponible: {
        type:Boolean,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    }
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

module.exports = Vehiculo;

