const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const registerUser = async(req, res = response) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) return res.status(400).json({
            ok: false,
            msg: `El correo electrónico '${ email }' está en uso`
        });

        user = new User(req.body);

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        res.status(201).json({
            ok: true,
            email,
            id: user.id
        });
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

        res.status(201).json({
            ok: true,
            email,
            id: user.id
        });
    } catch(error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado, por favor hablá con el administrador.' 
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}