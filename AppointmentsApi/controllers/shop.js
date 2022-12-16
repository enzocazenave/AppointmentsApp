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
        const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '2h' });
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

module.exports = {
    createShop,
    getShops
}