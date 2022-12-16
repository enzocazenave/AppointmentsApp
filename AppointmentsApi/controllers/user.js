const { response } = require('express');
const User = require('../models/User');

const getUser = async(req, res = response) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (!user) return res.status(404).json({
            ok: false,
            msg: 'No existe ese usuario.'
        });

        const { name, surname, phone, email } = user;
        
        res.status(200).json({ ok: true, name, surname, phone, email });
    } catch(error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado, por favor hablá con el administrador.'
        });
    }
}

module.exports = {
    getUser
}