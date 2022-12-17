const { CityRepository } = require("../repository/index");

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    // CREATE
    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Error in service layer");
            throw { error };
        }
    }

    // READ
    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Error in service layer");
            throw { error };
        }
    }

    // UPDATE
    async updateCity(cityId, data) {
        try{
            const city = await this.CityRepository.updateCity(cityId, data);
            return city;
        } catch(error){
            console.log("Error in service layer");
            throw { error };
        }
    }

    // DELETE
    async deleteCity() {
        try{
            const response = await this.CityRepository.deleteCity(cityId);
            return response;
        } catch(error){
            console.log("Error in service layer");
            throw { error };
        }
    }
}

module.exports = CityService;