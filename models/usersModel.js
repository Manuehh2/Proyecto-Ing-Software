const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor teclea el nombre del usuario"]
    },
    email: {
        type: String,
        required: [true, "Por favor teclea el email del usuario"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Por favor teclea la contraseña del usuario"]
    },
    esAdmin: {
        type: Boolean,
        required: true,
        default: false
    }

}); 

module.exports = mongoose.model("User", userSchema);