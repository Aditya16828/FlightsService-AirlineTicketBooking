const { CityService } = require("../services/index");

const cityserviceobj = new CityService();
// CREATE
/**
 * POST
 * data -> req.body
 */
const create = async (req, res) => {
    try {
        const city = await cityserviceobj.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city.",
            err: {},
        });
    } catch (error) {
        console.log("Error in controller layer");
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create city (error in controller layer)",
            err: error,
        });
    }
};

// READ
/**
 * GET
 * data -> req.params {/city/:id}
 */
const get = async (req, res) => {
    try {
        const city = await cityserviceobj.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully created a city.",
            err: {},
        });
    } catch (error) {
        console.log("Error in controller layer");
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get city (error in controller layer)",
            err: error,
        });
    }
};

// UPDATE
/**
 * PATCH
 * data -> req.body {/city/:id} => "id" means which city u r going to update, and "req.body" the data u want to udate with.
 */
const update = async (req, res) => {
    try {
        const city = await cityserviceobj.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully created a city.",
            err: {},
        });
    } catch (error) {
        console.log("Error in controller layer");
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update city (error in controller layer)",
            err: error,
        });
    }
};

// DELETE
/**
 * DELETE
 * data -> req.params {/city/:id}
 */
const destroy = async (req, res) => {
    try {
        const response = await cityserviceobj.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city.",
            err: {},
        });
    } catch (error) {
        console.log("Error in controller layer");
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete city (error in controller layer)",
            err: error,
        });
    }
};
