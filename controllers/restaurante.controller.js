
const Restaurante = require('../models/restaurante.model');

const createRestaurant = (request, response) => {
    const { restaurantName, tipo, horario, reputacion } = request.body;
    Restaurante.create({
        restaurantName, tipo, horario, reputacion
    })
        .then(user => response.json(user))
        .catch(err => response.status(400).json(err));
}

const deleteRestaurant = (req, res) => {
    const { id } = req.params;
    Restaurante.findByIdAndDelete(id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
}

const getAllRestaurants = (_, res) => {
    Restaurante.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
}

const getRestaurant = (req, res) => {
    const id = req.params.id
    Restaurante.findById(id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
}

const updateRestaurant = (req, res) => {
    const id = req.params.id
    const { nombre, tipo, reputacion } = req.body
    console.log(nombre)
    Restaurante.findOneAndUpdate({ _id: id }, { nombre, tipo, reputacion }, { new: true })
        .then(user => res.json(user))
        .catch(err => res.status(400).send(err))
}

module.exports = {
    createRestaurant,
    deleteRestaurant,
    getAllRestaurants,
    getRestaurant,
    updateRestaurant
}

