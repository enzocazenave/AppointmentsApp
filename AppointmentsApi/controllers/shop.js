const { response } = require('express');
const Shop = require('../models/Shop');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createShop = async(req, res = response) => {
    const { username, password } = req.body;

    try {
        let shop = await Shop.findOne({ username });

        if (shop) return res.status(400).json({
            ok: false,
            msg: `El nombre de usuario ${ username } está en uso.`
        })

        shop = new Shop(req.body);
        const salt = bcrypt.genSaltSync();
        shop.password = bcrypt.hashSync(password, salt)

        await shop.save();

        const payload = { id: shop.id, username }
        const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '24h' });
        payload.token = token;

        res.status(201).json({ ok: true, ...payload });
    } catch(error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado, por favor hablá con el administrador.'
        });
    }
}

const loginShop = async(req, res = response) => {
    const { username, password } = req.body;

    try {
        const shop = await Shop.findOne({ username });

        if (!shop) return res.status(400).json({
            ok: false,
            msg: 'Sus credenciales son incorrectas.'
        });

        const isPasswordValid = bcrypt.compareSync(password, shop.password);

        if (!isPasswordValid) return res.status(400).json({
            ok: false,
            msg: 'Sus credenciales son incorrectas.'
        });

        const payload = { id: shop.id, username }
        const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '24h' });
        payload.token = token;

        res.status(201).json({ ok: true, ...payload });
    } catch(error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado, por favor hablá con el administrador.'
        });
    }
}

const validateShop = (req, res = response) => res.status(200).json({ ok: true, ...req.body });

const getShops = async(req, res = response) => {
    try {
        const shops = await Shop.find().limit(5);

        shops.map(shop => {
            delete shop._doc.password;
            delete shop._doc.__v;
            delete shop._doc.username;

            return shop;
        });

        res.status(200).json({
            ok: true,
            shops
        });
    } catch(error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado, por favor hablá con el administrador.'
        });
    }
}

const getShop = async(req, res = response) => {
    const { id } = req.params;
    console.log(id)
}

module.exports = {
    createShop,
    loginShop,
    validateShop,
    getShops,
    getShop
}