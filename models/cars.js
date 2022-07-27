const mongoose = require('mongoose');

const CarsSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("marcas", CarsSchema);