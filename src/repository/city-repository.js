const {City} = require('../models/index.js');

class CityRepository {

    // CREATE
    async createCity({name}){
        try{
            const city = await City.create({name: name});
            return city;
        } catch(error){
            console.log("Error in repository layer");
            throw {error};
        }
    }

    // READ
    async getCity(cityId){
        try{
            const city = await City.findbyPk(cityId);
            return city;
        } catch(error){
            console.log("Error in repository layer");
            throw {error};
        }
    }

    // UPDATE
    async updateCity(cityId, data){
        try{
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch(error){
            console.log("Error in repository layer");
            throw {error};
        }
    }

    // DELETE
    async deleteCity(cityId){
        try{
            await city.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch(error){
            console.log("Error in repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;