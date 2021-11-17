const { createUser, createLogin, logout } = require('./auth.controller');
var express = require('express');
const router = express.Router();

router.get('/signupview', (req, res) => {
    res.render('pages/signup')
})
router.get('/view', (req, res) => {
    res.render('pages/index')
})

router.get('/loginview', (req, res) => {
    res.render('pages/login')
})
router.get('/logoutview', logout)

router.post('/signup', createUser);
router.post('/login', createLogin);


module.exports = router;