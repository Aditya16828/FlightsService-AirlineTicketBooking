const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { greaterTime } = require("../utils/greaterTime");

class FLightService {
    constructor() {
        this.airplaneRepoObj = new AirplaneRepository();
        this.flightRepoObj = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if (!greaterTime(data.arrival, data.departure)) {
                throw {
                    error: "Arrival time must be greater than departure time!!!",
                };
            }

            const airplane = await this.airplaneRepoObj.getAirplane(
                data.airplaneid
            );
            const flight = await this.flightRepoObj.createFlight({
                ...data,
                availableSeats: airplane.capacity,
            });
            return flight;
        } catch (error) {
            error = { ...error, from: "Service Layer" };
            throw error;
        }
    }

    async getFlight(flightid) {
        try {
            const flight = await this.flightRepoObj.getFlight(flightid);
            return flight;
        } catch (error) {
            console.log("Error in Service layer, cannot fetch Flight");
            console.log(error);
            throw { error };
        }
    }

    async getFlights(filters) {
        try {
            const flights = await this.flightRepoObj.getAllFlights(filters);
            return flights;
        } catch (error) {
            error = { ...error, from: "Service Layer" };
            throw error;
        }
    }

    async deleteFlight(id) {
        try {
            const response = await this.flightRepoObj.deleteFlight(id);
            return response;
        } catch (error) {
            if (error.from) {
                throw error;
            } else {
                error = { ...error, from: "Service Layer" };
                throw error;
            }
        }
    }

    async updateFlight(id, data) {
        try {
            const response = await this.flightRepoObj.updateFlight(id, data);
            return response;
        } catch (error) {
            error = {...error, from: "Service Layer"};
            throw error;
        }
    }
}

module.exports = FLightService;

/** data contains:
 * {
 *  airplaneid,
 *  srcAirportId,
 *  destAirportId,
 *  arrival,
 *  departure,
 *  flightNo,
 *  price,
 *  availableSeats
 * }
 *
 */
