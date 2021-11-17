
const Management = require('./management.model')


const createManagement = async (req, res, next) => {

    const managements = new Management(req.body);
    const r = await managements.save();
    const managementDetails = await Management.find({});

    res.render('pages/managementdetails', {
        management: managementDetails
    })
}

const deleteManagement = async (req, res, next) => {
    const id = req.params.id;
    const deletedmanagement = await Management.findOneAndDelete(id);
    res.redirect('/v1/management/list')
}


// update management
const updateManagement = async (req, res) => {
    const updateManagement = await Management.findByIdAndUpdate(req.params.id, {
        Title: req.body.Title,
        Description: req.body.Description,
        Name: req.body.Name,
        ManagementRole: req.body.ManagementRole

    });
    res.redirect('/v1/management/list')
}


const updateandGetManagement = async (req, res) => {
    let id = req.params.id;
    const managementFound = await Management.findById(id);
    console.log('managementfound', managementFound)
    res.render('pages/managementedit', {
        Title: managementFound.Title,
        Description: managementFound.Description,
        Name: managementFound.Name,
        ManagementRole: managementFound.ManagementRole
    })
}
module.exports = {
    createManagement,
    deleteManagement,
    updateManagement,
    updateandGetManagement
}