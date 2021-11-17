
const { router } = require('../route');
const Survey = require('./survey.model')


const createSurvey = async (req, res, next) => {
    console.log('vvv', req.body)
    const survey = new Survey(req.body);
    const r = await survey.save();
    const surveyDetails = await Survey.find({});


    res.render('pages/surveydetails', {
        survey: surveyDetails
    })
}

const deleteSurvey = async (req, res, next) => {
    const id = req.params.id;
    const deletedsurvey = await Survey.findOneAndDelete(id);
    res.redirect('/v1/survey/list')
}


// update for survey
const updateSurvey = async (req, res) => {
    console.log('reeee', req.body)
    const updateToronoment = await Survey.findByIdAndUpdate(req.params.id, {
        Title: req.body.Title,
        Description: req.body.Description,
        Name: req.body.Name,
        SurveyDate: req.body.SurveyDate,

    });
    res.redirect('/v1/survey/list')
}

const updateandGetSurvay = async (req, res) => {
    let id = req.params.id;
    const touronmentFound = await Survey.findById(id);
    console.log('tournment', req.body)
    res.render('pages/surveyedit', {
        Title: touronmentFound.Title,
        Description: touronmentFound.Description,
        Name: touronmentFound.Name,
        SurveyDate: touronmentFound.SurveyDate,

    })
}

module.exports = {
    createSurvey,
    deleteSurvey,
    updateSurvey,
    updateandGetSurvay
}