const mongoose = require('mongoose');


const concesionariaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true,
    },
    direccion: {
        type: String,
        unique: true,
        required: true,
    },
    vehiculos: [],
});

const Concesionaria = mongoose.model('Concesionaria', concesionariaSchema);

module.exports = Concesionaria
