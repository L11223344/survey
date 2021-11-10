
const { router } = require('../route');
const Survey = require('./survey.model')


const createSurvey = async (req, res, next) => {
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
    const updateToronoment = await Survey.findByIdAndUpdate(req.params.id, {
        Title: req.body.Title,
        Description: req.body.Description,
        surveyname: req.body.surveyname,
        SurveyDate: req.body.SurveyDate
    });
    res.redirect('/v1/survey/list')
}

const updateandGetSurvay = async (req, res) => {
    let id = req.params.id;
    const touronmentFound = await Survey.findById(id);
    console.log('tournment', touronmentFound)
    res.render('pages/surveyedit', {
        Title: touronmentFound.Title,
        Description: touronmentFound.Description,
        surveyname: req.body.surveyname,
        SurveyDate: req.body.SurveyDate
    })
}

module.exports = {
    createSurvey,
    deleteSurvey,
    updateSurvey,
    updateandGetSurvay
}