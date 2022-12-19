const { AirportRepository } = require("../repository/index");

class AirportService {
    constructor() {
        this.airportRepository = new AirportRepository();
    }

    async create(data, cityid) {
        try {
            const airports = await this.airportRepository.createAirports(data, cityid);
            return airports;
        } catch (error) {
            console.log("Error in Service Layer");
            console.log(error);
            throw {error};
        }
    }

    async getbyid(airportid){
        try{
            const airport = await this.airportRepository.getAirportbyId(airportid);
            return airport;
        } catch(error){
            console.log("Error in Service Layer");
            console.log(error);
            throw {error};
        }
    }

    async getAll(cityid){
        try{
            const airports = await this.airportRepository.get(cityid);
            return airports;
        } catch(error){
            console.log("Error in Service Layer");
            console.log(error);
            throw {error};
        }
    }

    async update(data, airportid){
        try{
            const airport = await this.airportRepository.updateAirport(data, airportid);
            return airport;
        } catch(error){
            console.log("Error in Service Layer");
            console.log(error);
            throw {error};
        }
    }

    async delete(airportid){
        try{
            const result = await this.airportRepository.deleteAirport(airportid);
            return result;
        } catch(error){
            console.log("Error in Service Layer");
            console.log(error);
            throw {error};
        }
    }
}

module.exports = AirportService;