const airportDetails = require('./../models/airportDetails.models');

const getAllAirportDetails = (req, res) => {
    res.status(200).json({
        airportDetails
    })
}
module.exports = {getAllAirportDetails};