const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');
const Plato= require('./plato.model');
const Restaurante = require('./restauranteSQL.model');
const Enrollment = sequelize.define('Enrollment', {
    enrollmentDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, //fecha actual será el valor por default
        allowNull: false
        }
        });
// Definición de relación muchos a muchos
User.belongsToMany(Plato, { through: Enrollment });
Subject.belongsToMany(Restaurante, { through: Enrollment });
// Definición de relaciones uno a muchos para cargar con `include` en el controlador
Enrollment.belongsTo(Plato, { foreignKey: 'PlatoID' });
Enrollment.belongsTo(Restaurante, { foreignKey: 'RestauranteID' });
module.exports = Enrollment;