const airportDetails = require('./../models/airportDetails.models');
const carrierLogo = require('./../models/carrierLogo.models');

const getAllAirportDetails = (req, res) => {
    res.status(200).json({
        airportDetails
    })
}
const getCarrierLogoo = (req, res) => {
    res.status(200).json({
        carrierLogo
    })
}
module.exports = {getAllAirportDetails, getCarrierLogoo};