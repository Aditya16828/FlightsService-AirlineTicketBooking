const {StatusCodes} = require('http-status-codes');

const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.airplaneid || !srcAirportId || !destAirportId
        || !arrival || !departure || !flightNo || !price || !availableSeats
    ){
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: "Invalid request body for flight creation",
            err: "Madatory properties missing"
        });
    }

    next();
}

module.exports = {validateCreateFlight};