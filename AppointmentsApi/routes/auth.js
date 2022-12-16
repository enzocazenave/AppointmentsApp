const { Router } = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser, validateUser } = require('../controllers/auth');
const { fieldValidator } = require('../middlewares/fieldValidator');
const { tokenValidator } = require('../middlewares/tokenValidator');

const router = Router();

router.post('/register',
    [
        check('email', 'El correo electrónico es obligatorio.').isEmail(),
        check('name', 'El nombre es obligatorio.').not().isEmpty(),
        check('surname', 'El apellido es obligatorio.').not().isEmpty(),
        check('phone', 'El numero de telefono es obligatorio.').isMobilePhone(),
        check('password', 'La contraseña debe tener 6 o más caractéres.').isLength({ min: 6 }),
        fieldValidator
    ],
    registerUser
);

router.post('/login',
    [
        check('email', 'El correo electrónico es obligatorio.').isEmail(),
        check('password', 'La contraseña debe tener 6 o más caractéres.').isLength({ min: 6 }),
        fieldValidator
    ],
    loginUser
);

router.get('/validate', tokenValidator, validateUser);

module.exports = router;