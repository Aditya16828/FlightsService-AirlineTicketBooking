const express = require('express');
const {CityController, AirportController, FlightController} = require('../../controllers/index');
const { FlightMiddlewares } = require('../../middlewares/index');

const router = express.Router();

router.post('/city', CityController.create); // CREATE city
router.post('/cities', CityController.createCities); // CREATE multiple cities
router.get('/city/:id', CityController.get); // READ city
router.get('/city', CityController.getAll); // READ multiple cities
router.patch('/city/:id', CityController.update); // UPDATE city
router.delete('/city/:id', CityController.destroy); // DELETE city


router.post('/city/airport/:cityid', AirportController.create); // (creating airports/airport)
router.get('/city/airport/:cityid', AirportController.get); // (Read all the airports for a city)
router.get('/airport/:id', AirportController.getAirport); // (Read a particular airport for a city)
router.delete('/airport/:id', AirportController.deleteAirport); // (update a particular airport)
router.patch('/airport/:id', AirportController.updateAirport); // (delete a particular airport)


router.post('/flights', FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get('/flights/:id', FlightController.get);
router.get('/flights', FlightController.getFlights);
router.delete('/flights/:id', FlightController.deleteFlight);
router.patch('/flights/:id', FlightController.updateFlight);

module.exports = router;