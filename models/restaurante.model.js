const mongoose = require('mongoose');
const RestauranteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [
            true,
            "restaurantName is required"
        ]
    },
    tipo: {
        type: String,
        required: [
            true,
            "Tipo is required"
        ],
    },
    horario: {
        type: String,
        required: [
            true,
            "El horario es requerido"
        ]
    },
    reputacion: {
        type: String,
        required: [
            true,
            "La reputación es requerida"
        ]
    }
});
const Restaurante = mongoose.model('Restaurante', RestauranteSchema);
module.exports = Restaurante;