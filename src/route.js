
var express = require('express');
const management = require('./Management/management.route');
const survey = require('./survey/survey.route');
const tournoment = require('./Tournoment/Tournoment.route')
const router = express()


router.use('/management', management);
router.use('/survey', survey);
router.use('/touronoment', tournoment)







// index page


// about page
router.get('/about', function (req, res) {
    res.render('pages/about');
});

module.exports = router;