const { Router } = require('express');
const router = Router();

const User = require('../models/user');
const jwt = require('jsonwebtoken');

/*Post*/
router.post('/signup', async(req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    newUser.save();
    const token = jwt.sign({ _id: newUser._id }, 'secretKey', {
        expiresIn: 60 * 1
    });
    res.status(200).json({ token });
});
router.post('/signin', async(req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err) {
            res.status(500).send('Error en la Autenticacion');
        } else if (!user) {
            res.status(500).send("Usuario no encontrado");
        } else {
            const token = jwt.sign({ _id: user._id }, 'secretKey');
            return res.status(200).json({ token });
        }
    });
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("No Autorizado");
    }
    const token = req.headers.authorization.split('')[1];
    if (token == 'null') {
        return res.status(401).send("No Autorizado");
    }
    const payload = jwt.verify(token, 'secretKey');
    req.userId = payload._id;
    next();
}
module.exports = router;