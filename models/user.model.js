const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [
            true,
            "email is required"
        ]
    },
    password: {
        type: String,
        required: [
            true,
            "password is required"
        ],
        validate: {
            validator: function (value) {
                return value.length >= 8;
            },
            message: "password must be at least 8 characters long",
        }
    },
});
const User = mongoose.model('User', UserSchema);
module.exports = User;