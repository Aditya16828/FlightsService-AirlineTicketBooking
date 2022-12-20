const {FlightRepository, AirplaneRepository} = require('../repository/index');
const {greaterTime} = require('../utils/helper');

class FLightService{
    constructor(){
        this.airplaneRepoObj = new AirplaneRepository();
        this.flightRepoObj = new FlightRepository();
    }
    async createFlight(data){
        try {
            if(!greaterTime(data.arrival, data.departure)){
                throw {error: 'Arrival time must be greater than departure time!!!'};
            }
            
            const airplane = await this.airplaneRepoObj.getAirplane(data.airplaneid);
            const flight = await this.flightRepoObj.createFlight({...data, availableSeats: airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Error in Service layer, cannot create FLight");
            console.log(error);
            throw {error};
        }
    }

    async getFlight(flightid){
        try {
            const flight = await this.flightRepoObj.getFlight(flightid);
            return flight;
        } catch (error) {
            console.log("Error in Service layer, cannot fetch Flight");
            console.log(error);
            throw {error};
        }
    }

    async getFlights(filters){
        try {
            const flights = await this.flightRepoObj.getAllFlights(filters);
            return flights;
        } catch (error) {
            console.log("Error in Service layer, cannot fetch Flights");
            console.log(error);
            throw {error};
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