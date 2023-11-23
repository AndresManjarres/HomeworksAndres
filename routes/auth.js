const express = require('express')
const router = express.Router();
const { check } = require('express-validator')
const { crearUsuario, login, renewToken } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')

router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    login
)




router.post('/new',
    [

        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario

)

router.get('/renew', renewToken)
module.exports = router;









