const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: [true, 'Nombre es obligatorio']
    },
    email:{
        type: String,
        required: [true, 'Correo es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Contraseña es obligatoria']
    }
});


