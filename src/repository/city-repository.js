const { City, sequelize } = require("../models/index.js");
const { QueryTypes, Op } = require("sequelize");

class CityRepository {
    // CREATE
    async createCity({ name }) {
        try {
            const city = await City.create({ name: name });
            return city;
        } catch (error) {
            console.log("Error in repository layer");
            throw { error };
        }
    }

    async createCities(name) {
        try {
            // let cities = [];
            // for (let i = 0; i < name.length; i++) {
            //     cities.push(await City.create({ name: name[i] }));
            // }
            // console.log(name);
            // let nameObj = [];
            // for(let i=0;i<name.length;i++){
            //     nameObj.push({name: name[i]});
            // }
            const cities = await City.bulkCreate(name);
            return cities;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    // READ
    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Error in repository layer");
            throw { error };
        }
    }

    // UPDATE
    async updateCity(cityId, data) {
        try {
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Error in repository layer");
            throw { error };
        }
    }

    // DELETE
    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId,
                },
            });
            return true;
        } catch (error) {
            console.log("Error in repository layer");
            throw { error };
        }
    }

    async getAllCities({ name }) {
        try {
            if (name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            // [Op.like]: name+'%'
                            [Op.startsWith]: name,
                        },
                    },
                });
                return cities;
            }
            const cities = await sequelize.query("select * from Cities", {
                type: QueryTypes.SELECT,
            });
            return cities;
        } catch (error) {
            console.log(error);
            throw { error };
        }
    }
}

module.exports = CityRepository;
