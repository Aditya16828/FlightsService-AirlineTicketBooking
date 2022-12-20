const express = require('express');
const {CityController, AirportController, FlightController} = require('../../controllers/index');

const router = express.Router();

router.post('/city', CityController.create); // CREATE
router.post('/cities', CityController.createCities);
router.get('/city/:id', CityController.get); // READ
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update); // UPDATE
router.delete('/city/:id', CityController.destroy); // DELETE


router.post('/city/airports/:cityid', AirportController.create); // (creating airports/airport)
router.get('/city/airports/:cityid', AirportController.get); // (Read all the airports for a city)
router.get('/airport/:id', AirportController.getAirport); // (Read a particular airport for a city)
router.delete('/airport/:id', AirportController.deleteAirport); // (update a particular airport)
router.patch('/airport/:id', AirportController.updateAirport); // (delete a particular airport)


router.post('/flights', FlightController.create);
router.get('/flights/:id', FlightController.get);
router.get('/flights', FlightController.getFlights);

module.exports = router;