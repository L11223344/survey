const express = require('express');
const router = express.Router();
const Survey = require('./survey.model')
const { createSurvey, deleteSurvey, updateSurvey, updateandGetSurvay } = require('./survey.controller')

router.get('/list', async (req, res) => {
    const surveyDetails = await Survey.find({});
    res.render('pages/surveydetails', {
        survey: surveyDetails
    })
})
router.get('/survey', (req, res) => {
    res.render('pages/survey')
})

// for update route
router.post('/update/:id', updateSurvey);
router.get('/update/:id', updateandGetSurvay)

router.post('/survey', createSurvey)
router.get('/delete/:id', deleteSurvey)
module.exports = router;