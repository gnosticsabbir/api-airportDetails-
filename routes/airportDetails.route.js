const router = require('express').Router();
const { getAllAirportDetails,getCarrierLogoo } = require('../controllers/airportDetails.controller');


router.get("/airportdetails", getAllAirportDetails );
router.get("/carrierLogo", getCarrierLogoo );

module.exports = router;