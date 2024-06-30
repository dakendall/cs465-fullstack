const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code 
//and json message to the requesting client
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) // no filter returns all records
        .exec();

        // Uncomment the following line to show results on console
        // console.log(q);

        try {
            if(!q) 
                { // Database returned no data
                    res.status(404).send('Database returned no data');
            } else {
                //return resulting trip list
                return res 
                    .status(200) 
                    .json(q);
            } 
        } catch (e) {
            res.status(500).json(e);
        }
};

// GET: /trips/:tripCode - lists all the trips
// Regardless of outcome, response must include HTML status code 
//and json message to the requesting client
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // no filter returns all records
        .exec();

        // Uncomment the following line to show results on console
        // console.log(q);

        try {
            if(!q) 
                { // Database returned no data
                    res.status(404).send('Database returned no data');
            } else {
                //return resulting trip list
                return res 
                    .status(200) 
                    .json(q);
            } 
        } catch (e) {
            res.status(500).json(e);
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

    try {
        if(!q) 
            { // Database returned no data
                res.status(400).send('Database returned no data');
        } else {
            return res 
                .status(201) 
                .json(q);
        } 
    } catch (e) {
        res.status(500).json(e);
    }

    // Uncomment the following line to show results of operation on console
    console.log(q);
};

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {

    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model.findOneAndUpdate(
        { 'code' : req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name, 
                length: req.body.length, 
                start: req.body.start, 
                resort: req.body.resort, 
                perPerson: req.body.perPerson, 
                image: req.body.image, 
                description: req.body.description
            }
        )
        .exec();

        try {
            if(!q) 
                { // Database returned no data
                    res.status(400).send(':tripCode is a required parameter');
            } else { // Return resulting updated trip
                return res 
                    .status(201) 
                    .json(q);
            } 
        } catch (e) {
            res.status(500).json(e);
        }

       
};

// DELETE: /trips/:tripCode - Deletes a trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsDeleteTrip = async (req, res) => {
    try {
        if (!req.params.tripCode) {
            // If no :tripCode is provided, send a 400 BAD REQUEST error
            res.status(400).send(':tripCode is a required parameter');
            return;
        }

        //deleteOne() returns 1 if successful, 0 if not
        if ((await Model.deleteOne({ 'code': req.params.tripCode })) < 0) {
            //No trip was found with the :tripCode, return a 404 NOT FOUND error
            res.status(404).send(`No trip found with tripCode ${req.params.tripCode}`);
            return;
        }
        res.status(200).send();
    } catch (e) {
        res.status(500).json(e);
    }
};




module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};