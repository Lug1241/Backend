const Restaurante = require("../models/restauranteSQL.model");

module.exports.getUserEnrollments = async (req, res) => {try {
    const enrollments = await Enrollment.findAll({
    where: { RestauranteID: req.params.RestauranteId },
    include: [Subject]
    });
    res.json(enrollments);
    } catch (err) {
    res.status(500).json({msg: "Ocurrió un error al obtener los platos del restaurante"});
    }
    };