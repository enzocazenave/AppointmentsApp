const { Router } = require('express');
const { getUser } = require('../controllers/user');
const router = Router();

router.get('/:id', [], getUser);

module.exports = router;