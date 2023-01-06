const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig.js");

const ApiRoutes = require("./routes/index");

const { City, Airport, sequelize } = require("./models/index");

const setupAndstartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api/", ApiRoutes);

    app.listen(PORT, async function () {
        console.log("Server started at", PORT);

        // const airports = await Airport.findAll({where:{cityId:13}, include: City});
        // console.log(JSON.stringify(airports, null, 2));
		
		if(process.env.SYNC_DB){ 
			sequelize.sync({alter: true});
		}
		// const city = await City.findOne({
		// 	where: {
		// 		id: 13
		// 	}
		// })
		// const airports = await city.getAirports();
		// console.log(city, airports);

		// await city.createAirport({
		// 	name: 'Jindal Vijaynagar Airport'
		// });
		// const city = await City.findOne({where: {id: 19}});
		// await city.createAirports([
		// 	{name: 'Kanpur Civil Airport'},
		// 	{name: 'Kanpur Military Airport'},
		// 	{name: 'Kanpur public airport'}
		// ]);
    });
};

setupAndstartServer();
