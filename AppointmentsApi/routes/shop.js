const { Router } = require('express');
const { createShop, getShops, loginShop, validateShop, getShop } = require('../controllers/shop');
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/fieldValidator');
const { tokenValidator } = require('../middlewares/tokenValidator');
const router = Router();

router.post('/new',
    [
        check('name', 'El nombre del comercio es obligatorio.').not().isEmpty(),
        check('type', 'El tipo de comercio es obligatorio').not().isEmpty(),
        check('location', 'La ubicación del comercio es obligatoria.').not().isEmpty(),
        check('text', 'La descripción del comercio es obligatoria').not().isEmpty(),
        check('image', 'La imagen de fondo del comercio es obligatoria').isURL(),
        check('config', 'Debes setear la configuración del comercio').isObject(),
        check('username', 'El nombre de usuario del comercio es obligatorio').not().isEmpty(),
        check('password', 'La contraseña debe tener 6 o más caractéres.').isLength({ min: 6 }),
        fieldValidator
    ],
    createShop
);

router.post('/login',
    [
        check('username', 'El nombre de usuario es obligatorio.').not().isEmpty(),
        check('password', 'La contraseña debe tener 6 o más caractéres.').isLength({ min: 6 }),
        fieldValidator
    ],
    loginShop
);

router.get('/all', getShops);

router.get('/id/:id', getShop);

router.get('/validate', tokenValidator, validateShop);


module.exports = router;