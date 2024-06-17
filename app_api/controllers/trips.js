const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all trips
// Regarless of outcome, response must include HTML status code
// and Json mesg to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
    .find({}) // No filter, return all records
    .exec();

    // Uncomment the following line to show results of querey
    // on the console
    // console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip
// Regarless of outcome, response must include HTML status code
// and Json mesg to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
    .find({'code' : req.params.tripCode}) // Return single record
    .exec();

    // Uncomment the following line to show results of querey
    // on the console
    // console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// POST: /trips - Adds a new Trip
// Reguardless fo outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if(!q) {
        // Database returns no data
        return res
            .status(400)
            .json(err);
    } else { // Return new trip
        return res
            .status(201)
            .json(q);
    }

    // Uncomment the following line to show results of operation on console
    console.log(q);
};

// PUT: /trips/:tripCode - Adds a new a Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {

    //uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model.findOneAndUpdate ({'code':req.params.tripCode}, 
    {
        code: req.body.code,
        name: req.body.name,
        legnth: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    }).exec();

    if(!q) {
        // Database returned no data
        return res
        .status(400)
        .json(err);
    } else {
        // Return resulting dated trip
        return res
        .status(201)
        .json(q);
    }

    // Uncomment the following line to show results of operation on the console
    // console.log(q);
};

const tripsDeleteTrip = async(req, res) => {
    
    await Model
    .findOneAndDelete({'code' : req.params.tripCode})
    .then(trip => {
        if (!trip) {
            return res
            .status(404)
            .send({
                message: "Trip was not found with the code " + req.params.tripCode
            });
        }

        return res
    }).catch(err => {
        if (err.kind == 'ObjectId') {
            return res
            .status(404)
            .send({
                message: "Trip was not found with the code " + req.params.tripCode
            });
        }
        return res
            .status(500) // server error
            .json(err);
    }) 

    console.log("Return from delete trip")

}

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};