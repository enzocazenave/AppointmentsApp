const { Router } = require('express');
const { createShop } = require('../controllers/shop');
const router = Router();

router.get('/new', createShop);

module.exports = router;