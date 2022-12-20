const { Airport, City } = require("../models/index");
const CrudRepository = require('./crud-repository');

/*
class AirportRepository {
    async createAirport(airportData, cityid) {
        try {
            const city = await City.findOne({ where: { id: cityid } });
            const airport = await city.createAirport({
                name: airportData.name,
                address: airportData.address,
            });
            return airport;
        } catch (error) {
            console.log("Error creating airport at Repository level.");
            console.log(error);
            throw { error };
        }
    }

    async createAirports(airportdata_arr, cityid) {
        try {
            if (airportdata_arr.length <= 1) {
                return this.createAirport(airportdata_arr[0], cityid);
            } else {
                const city = await City.findOne({ where: { id: cityid } });
                let airports = [];
                for (let i = 0; i < airportdata_arr.length; i++) {
                    airports.push(
                        await city.createAirport({
                            name: airportdata_arr[i].name,
                            address: airportdata_arr[i].address,
                        })
                    );
                }
                return airports;
            }
        } catch (error) {
            console.log("Error creating airport at Repository level.");
            console.log(error);
            throw { error };
        }
    }

    async getAirportbyId(airportid) {
        try {
            const airport = await Airport.findByPk(airportid);
            return airport;
        } catch (error) {
            console.log("Error creating airport at Repository level.");
            console.log(error);
            throw { error };
        }
    }

    async get(cityid) {
        try {
            const city = await City.findOne({ where: { id: cityid } });
            const airports = await city.getAirports();
            return airports;
        } catch (error) {
            console.log("Error creating airport at Repository level.");
            console.log(error);
            throw { error };
        }
    }

    async updateAirport(airportData, airportid) {
        try {
            const airport = await Airport.findByPk(airportid);
            airport.name = airportData.name;
            airport.address = airportData.address;
            airport.cityId = airportData.cityId;
            airport.save();
            return airport;
        } catch (error) {
            console.log("Error creating airport at Repository level.");
            console.log(error);
            throw { error };
        }
    }

    async deleteAirport(airportid) {
        try {
            await Airport.destroy({where: {id: airportid}});
            return true;
        } catch (error) {
            console.log("Error creating airport at Repository level.");
            console.log(error);
            throw { error };
        }
    }
}*/

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }

    async create(airportData, cityid) {
        try {
            const city = await City.findOne({ where: { id: cityid } });
            const airport = await city.createAirport({
                name: airportData.name,
                address: airportData.address,
            });
            return airport;
        } catch (error) {
            console.log("Error creating airport at Repository level.");
            console.log(error);
            throw { error };
        }
    }

    async createAirports(airportdata_arr, cityid) {
        try {
            if (airportdata_arr.length <= 1) {
                return this.create(airportdata_arr[0], cityid);
            } else {
                const city = await City.findOne({ where: { id: cityid } });
                let airports = [];
                for (let i = 0; i < airportdata_arr.length; i++) {
                    airports.push(
                        await city.createAirport({
                            name: airportdata_arr[i].name,
                            address: airportdata_arr[i].address,
                        })
                    );
                }
                return airports;
            }
        } catch (error) {
            console.log("Error creating airport at Repository level.");
            console.log(error);
            throw { error };
        }
    }

    async getByCityid(cityid) {
        try {
            const city = await City.findOne({ where: { id: cityid } });
            const airports = await city.getAirports();
            return airports;
        } catch (error) {
            console.log("Error creating airport at Repository level.");
            console.log(error);
            throw { error };
        }
    }
}

module.exports = AirportRepository;
