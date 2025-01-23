const Enrollment = require('../models/enrollment.model');
//const User = require('../models/user.model');
const Plato = require('../models/plato.model');
// Controlador para matricular un usuario en una asignatura
module.exports.enrollUser = async (req, res) => {
try {
const { platoId, restauranteId } = req.body;
const enrollment = await Enrollment.create({ PlatoId: PlatoId, RestauranteId:RestauranteId });
res.json(enrollment);
} catch (err) {
res.status(500).json({msg: "Ocurrió un error al registrar la matriculación"});
}
};