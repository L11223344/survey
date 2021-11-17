const User = require('../Auth/auth.model')
const jwt = require('jsonwebtoken')

const checkUser = async (req, res, next) => {
    try {

        const username = req.body.username;
        const password = req.body.password;
        var token = req.cookies.auth;
        if (token) {

            jwt.verify(token, 'test', function (err, token_data) {
                if (err) {
                    return res.status(403).send('Error');
                } else {
                    req.user = token_data;
                    next();
                }
            });

        } else {
            res.redirect('/')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    checkUser
}