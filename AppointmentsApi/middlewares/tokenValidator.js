const { verify } = require('jsonwebtoken');

const tokenValidator = (req, res, next) => {
    const token = req.header('x-token');

    if (!token) return res.status(401).json({
        ok: false,
        msg: 'No se recibió un token en la petición'
    });

    try {
        const data = verify(token, process.env.SECRET_KEY_JWT);
        req.body = {
            id: data.id,
            email: data.email || data.username
        };
        next();
    } catch(error) {
        return res.status(401).json({
            ok: false,
            message: 'El token recibido es inválido.'
        });
    }
}

module.exports = {
    tokenValidator
}