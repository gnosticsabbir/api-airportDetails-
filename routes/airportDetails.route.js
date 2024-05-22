const router = require('express').Router();
const { getAllAirportDetails } = require('../controllers/airportDetails.controller');


router.get("/airportdetails", getAllAirportDetails );

module.exports = router;