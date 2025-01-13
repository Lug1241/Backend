const RestauranteController = require('../controllers/restaurante.controller');

module.exports = function(app){
app.post("/restaurantes/", RestauranteController.createRestaurant);
app.delete("/restaurantes/:id",RestauranteController.deleteRestaurant)
app.get("/restaurantes/",RestauranteController.getAllRestaurants)
app.get("/restaurantes/:id",RestauranteController.getRestaurant)
app.put("/restaurantes/:id",RestauranteController.updateRestaurant)
}
