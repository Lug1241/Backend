const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');
const Plato = sequelize.define('Plato', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "Subject name is required" }
        }
    }
})
module.exports= Plato