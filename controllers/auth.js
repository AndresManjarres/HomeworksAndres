const express = require('express')
const { validationResult } = require('express-validator')

const crearUsuario = (req, res = express.request) => { 
    const{name, email, password} = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    req.status(200).json({
        ok: true,
        name,email,password

    })
    
}  

const login = (req, res = express.request) => {
    res.json({ok: true,
    message: 'Login'})

}

const renewToken = (req, res = express.request) => {
    return res.json({
        ok: true
    })
}
module.exports = {
    crearUsuario,
    login,
    renewToken
}
