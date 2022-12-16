const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const registerUser = async(req, res = response) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) return res.status(400).json({
            ok: false,
            msg: `El correo electrónico '${ email }' está en uso.`
        });

        user = new User(req.body);

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        const payload = { id: user.id, email }
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

const loginUser = async(req, res = response) => {
    
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({
            ok: false,
            msg: 'Sus credenciales son incorrectas.'
        });

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) return res.status(400).json({
            ok: false,
            msg: 'Sus credenciales son incorrectas.'
        });

        const payload = { id: user.id, email }
        const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '2h' });
        payload.token = token;

        res.status(201).json({ ok: true, ...payload });
    } catch(error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado, por favor hablá con el administrador.' 
        })
    }
}

const validateUser = (req, res = response) => res.status(200).json({ ok: true, ...req.body });

module.exports = {
    registerUser,
    loginUser,
    validateUser
}