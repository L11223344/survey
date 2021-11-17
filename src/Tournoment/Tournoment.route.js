const express = require('express');
const Tournoment = require('./Tournoment.model');
const { checkUser } = require('../Middlewares/auth.middleware')
const router = express.Router();
const { createTouronoment, deleteTournoment, updateTournoment, updateDetails } = require('./Tournoment.controller')

router.get('/list', checkUser, async (req, res) => {
    const tournoment = await Tournoment.find({})
    res.render('pages/tournomentdetails', {
        tournoment: tournoment
    })
})

router.get('/tournoment', checkUser, (req, res) => {
    res.render('pages/tournoment')
})
router.get('/details', (req, res) => {
    res.render('pages/tournomentdetails')
})
router.post('/tournoment', createTouronoment);
router.get('/delete/:id', deleteTournoment);
router.get('/delete', async (req, res) => {
    const tournoment = await Tournoment.find({})
    res.render('pages/tournomentdetails', {
        tournoment: tournoment
    })
})
router.post('/update/:id', updateTournoment);
router.get('/update/:id', updateDetails)
module.exports = router;