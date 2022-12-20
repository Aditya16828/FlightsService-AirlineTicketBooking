const {FlightService} = require('../services/index');

const flightServiceObj = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightServiceObj.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Successfully created a Flight",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able create a Flight",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightServiceObj.getFlight(req.params.id);
        return res.status(200).json({
            data: flight,
            success: true,
            message: "Successfully fetched Flight",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able fetch a Flight",
            err: error
        });
    }
}

const getFlights = async (req, res) => {
    try {
        // console.log(req.query);
        const flights = await flightServiceObj.getFlights(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message: "Successfully fetched all Flights",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able create a Flight",
            err: error
        });
    }
}

module.exports = {create, get, getFlights};