

const Tournoment = require('./Tournoment.model')


const createTouronoment = async (req, res, next) => {
    console.log('bbb', req.body)
    const tournoment = new Tournoment(req.body);
    const r = await tournoment.save();

    const tournomentDetails = await Tournoment.find({});
    console.log('t', tournomentDetails)

    res.render('pages/tournomentdetails',
        {
            tournoment: tournomentDetails
        }

    )
}


const deleteTournoment = async (req, res, next) => {
    const id = req.params.id;
    const deletedTournoment = await Tournoment.findOneAndDelete(id);


    res.redirect('/v1/touronoment/list')
}


const updateTournoment = async (req, res, next) => {
    const updateToronoment = await Tournoment.findByIdAndUpdate(req.params.id, {
        Title: req.body.Title,
        Description: req.body.Description,
        name: req.body.name,
        tournmentdate: req.body.tournmentdate
    });
    res.redirect('/v1/touronoment/list')
}

const updateDetails = async (req, res) => {
    let id = req.params.id;
    const touronmentFound = await Tournoment.findById(id);
    res.render('pages/tournmentedit', {
        Title: touronmentFound.Title,
        Description: touronmentFound.Description,
        name: touronmentFound.name,
        tournmentdate: touronmentFound.tournmentdate
    })
}
module.exports = {
    createTouronoment,
    deleteTournoment,
    updateTournoment,
    updateDetails
}