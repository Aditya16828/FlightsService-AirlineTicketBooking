const {Flight} = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository{

    #createfilter(filterData){
        let filter = {};

        if(filterData.srcAirportId){
            filter.srcAirportId = filterData.srcAirportId;
        }
        if(filterData.destAirportId){
            filter.destAirportId = filterData.destAirportId;
        }
        
        let minPrice = 0, maxPrice = 10000000;
        if(filterData.minPrice){
            minPrice = parseFloat(filterData.minPrice);
        }
        if(filterData.maxPrice){
            maxPrice = parseFloat(filterData.maxPrice);
        }

        Object.assign(filter, {price: {[Op.between]: [minPrice, maxPrice]}});

        console.log(filter);
        return filter;
    }

    async createFlight(data){
        try{
            const flight = await Flight.create(data);
            return flight;
        } catch(error) {
            console.log("Error in Repository layer, cannot create flight");
            console.log(error);
            throw {error};
        }
    }

    async getFlight(flightid){
        try {
            const flight = await Flight.findByPk(flightid);
            return flight;
        } catch (error) {
            console.log("Error in repository layer");
            throw {error};
        }
    }

    async getAllFlights(filterData){
        try{
            const filter = this.#createfilter(filterData);
            const flights = await Flight.findAll({where: filter});
            // const flights = await Flight.findAll({where: {
            //     price: {
            //         [Op.between]: [3000, 6000]
            //     }
            // }});
            return flights;
        } catch(error) {
            console.log("Error in repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;