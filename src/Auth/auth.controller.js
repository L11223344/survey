
const jwt = require('jsonwebtoken')
const User = require('./auth.model');


const createUser = async (req, res, next) => {
    console.log('running', req.body)
    const user = new User(req.body);
    const r = await user.save();
    res.render('pages/login')
}
const createLogin = async (req, res, next) => {
    console.log('req', req.body)
    const userExists = await User.find({
        email: req.body.email,
        password: req.body.password
    })

    if (userExists.length == 0) {
        console.log('user nae hay')

        res.redirect('/v1/auth/loginview')

    } else {

        let requestEmail = userExists[0].email;
        let requestPass = userExists[0].password;
        var token = jwt.sign({ foo: requestEmail }, 'test');
        res.cookie('auth', token);
        let updatingSuccess = await User.findOneAndUpdate({
            success: true,
        })
        console.log('cookiessss', requestEmail)
        // res.redirect('/v1/auth/view')
        res.render('pages/index', {
            userinfo: requestEmail
        })
    }
}

const logout = async (req, res) => {

    const deletedUser = await User.remove({});
    res.clearCookie("auth");
    res.redirect('/')


}

module.exports = {
    createUser,
    createLogin,
    logout

}