const express = require('express')
const { validationResult } = require('express-validator')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')

const crearUsuario = async (req, res = express.request) => {
    const { name, email, password } = req.body
    try {
        let usuario = await Usuario.findOne({ email })
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario existente'
            })
        }

        usuario = new Usuario(req.body)
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt)
        await usuario.save()

        res.status(200).json({
            ok: true,
            usuario
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error'
        })
    }
}

const login = async (req, res = express.request) => {
    const { email, password } = req.body
    try {

        let usuario = await Usuario.findOne({ email: email })
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe el usuario'
            })
        }
        const validPassword = bcrypt.compareSync(password, usuario.password)
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            })
        }
        res.status(200).json({
            ok: true,
            usuario
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error
        })
    }

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
