const { AirportService } = require('../services/index');

const airportServiceObj = new AirportService();

const create = async (req, res) => {
    try{
        const response = await airportServiceObj.create(req.body, req.params.cityid);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created airport(s).",
            err: {}
        })
    } catch(error){
        console.log("Error in Controller layer");
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create airport(s) (error in controller layer)",
            err: error
        });
    }
}

const get = async (req, res) => {
    try{
        const airports = await airportServiceObj.getAll(req.params.cityid);
        return res.status(200).json({
            data: airports,
            success: true,
            messag: "Successfully fetched Airports of the city.",
            err: {}
        });
    } catch(error){
        console.log("Error in Controller layer");
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create airport (error in controller layer)",
            err: error
        });
    }
}

const getAirport = async (req, res) => {
    try{
        const airport = await airportServiceObj.getbyid(req.params.id);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully fetched airport.",
            err: {}
        });
    } catch(error){
        console.log("Error in Controller layer");
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create airport (error in controller layer)",
            err: error
        });
    }
}

const deleteAirport = async (req, res) => {
    try{
        const response = await airportServiceObj.delete(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the airport.",
            err: {}
        })
    } catch(error){
        console.log("Error in Controller layer");
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create airport (error in controller layer)",
            err: error
        });
    }
}

const updateAirport = async (req, res) => {
    try{
        const airport = await airportServiceObj.update(req.body, req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Successfully updated the airport.",
            err: {}
        });
    } catch(error){
        console.log("Error in Controller layer");
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create airport (error in controller layer)",
            err: error
        });
    }
}

module.exports = {create, get, getAirport, deleteAirport, updateAirport};