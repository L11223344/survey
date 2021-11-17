const express = require('express');
const { checkUser } = require('../Middlewares/auth.middleware')
const Management = require('./management.model')
const router = express.Router();
const { createManagement, deleteManagement, updateManagement, updateandGetManagement } = require('./management.controller');
router.get('/management', checkUser, (req, res) => {
    res.render('pages/management')
})


// update
router.post('/update/:id', updateManagement)
router.get('/update/:id', updateandGetManagement)


router.get('/list', checkUser, async (req, res) => {
    const managementDetails = await Management.find({});
    res.render('pages/managementdetails', {
        management: managementDetails
    })
})

router.post('/management', createManagement);
router.get('/delete/:id', deleteManagement)
module.exports = router;