const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');
const  Restaurante= sequelize.define('Restaurante', {
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
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "el tipo is required" }
        }
    },
    horario: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: " El horario is required" }
        }
    },
    reputacion: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: { msg: "Reputación is required" }
        }
    }


})
module.exports= Restaurante