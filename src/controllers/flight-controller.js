const {FlightService} = require('../services/index');
const {StatusCodes} = require('http-status-codes')

const flightServiceObj = new FlightService();

const create = async (req, res) => {
    try {
        let flightRequestData = {
            airplaneid: req.body.airplaneid,
            srcAirportId: req.body.srcAirportId,
            destAirportId: req.body.destAirportId,
            arrival: req.body.arrival,
            departure:  req.body.departure,
            flightNo: req.body.flightNo,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            availableSeats: req.body.availableSeats
        };
        const flight = await flightServiceObj.createFlight(flightRequestData);
        return res.status(StatusCodes.CREATED).json({
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
        return res.status(StatusCodes.OK).json({
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
        return res.status(StatusCodes.OK).json({
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