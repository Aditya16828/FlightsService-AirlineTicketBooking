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
            error = {...error, from: "Repository Layer"};
            throw error;
        }
    }

    async getFlight(flightid){
        try {
            const flight = await Flight.findByPk(flightid);
            return flight;
        } catch (error) {
            error = {...error, from: "Repository Layer"};
            throw error;
        }
    }

    async getAllFlights(filterData){
        try{
            const filter = this.#createfilter(filterData);
            const flights = await Flight.findAll({where: filter});
            return flights;
        } catch(error) {
            error = {...error, from: "Repository Layer"};
            throw error;
        }
    }

    async updateFlight(id, data){
        try {
            await Flight.update(data, {where:{id: id}});
            return true;
        } catch (error) {
            error = {...error, from: "Repository Layer"};
            throw error;
        }
    }

    async deleteFlight(id){
        try {
            await Flight.destroy({where: {id: id}});
            return true;
        } catch (error) {
            console.log(error);
            error = {...error, from: "Repository Layer"};
            throw error;
        }
    }
}

module.exports = FlightRepository;