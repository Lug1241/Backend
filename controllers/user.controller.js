const User = require('../models/user.model');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const generateToken=(id)=>{
    return jwt.sign({id}, "hola", {expiresIn: '30d'})//EXPIRA EN 30 DIAS
}
module.exports.createUser = async (request, response) => {
    const {email, password} = request.body;
    if(!email || !password){
    response.status(400).json({message: 'Missing fields, all are mandatory!'});
    }else{
    const userFound = await User.findOne({email});
    if (userFound){
    response.status(400).json({message: 'User already exist'});
    }else{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    User.create({
    email, password: hashedPassword
    })
    .then(user => {response.json({email: user.email, _id: user._id, token:generateToken(user._id)})
    console.log(user)
})
    .catch(err => response.status(400).json(err));
    }
    }
}

module.exports.loginUser = async (req, res) =>{
    const {email, password} = req.body;
    const userFound = await User.findOne({email});
    //console.log('Usuario encontrado: ', userFound);
    if (userFound && (await bcrypt.compare(password, userFound.password))){res.json({message: 'Login User', email: userFound.email, userName:userFound.userName, token: generateToken(userFound._id)})
    }else{
    res.status(400).json({message: 'Login Failed'})
    }
    }