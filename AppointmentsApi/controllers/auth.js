const { response } = require('express');

const registerUser = async(req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'register'
    })
}

const loginUser = async(req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'login'
    })
}

module.exports = {
    registerUser,
    loginUser
}