const express = require('express');
const CityController = require('../../controllers/city-controller.js');

const router = express.Router();

router.post('/city', CityController.create); // CREATE
router.get('/city/:id', CityController.get); // READ
router.patch('/city/:id', CityController.update); // UPDATE
router.delete('/city/:id', CityController.destroy); // DELETE

module.exports = router;