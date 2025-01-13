const UserController = require('../controllers/user.controller');


module.exports = function(app){
app.post("/register/users", UserController.createUser);
app.post("/login/users",UserController.loginUser);

}