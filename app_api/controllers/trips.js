const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

const getUser = (req, res, callback) => {

    console.log('in #getUser');
    //console.log(req.payload.email);
    
    if (req.auth && req.auth.email) {

    // if (req.payload && req.payload.email) {
        User
            .findOne({ email : req.auth.email })
            .exec((err, user) => {
                if (!user) {
                    return res  
                        .status(404)
                        .json({"message": "Email not found"});
                } else if (err) {
                    console.log(err);
                    return res
                        .status(404)
                        .json(err);

                }
                callback(req, 
                    res.json({"message": "User found"}), 
                    console.log('callback'),
                    console.log(req.auth)
                    
                    );


                });
    } else {
        
        return res
            .status(404)
            .json({"message": "User was not found"});
            console.log(req.payload);
            
    }
};


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
const tripsAddTrip = async (req, res) => {
    getUser(req, res, 
        (req, res) => {
            Trip
            .create({
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            (err, trip) => {
                if (err) {
                    return res
                        .status(400) // bad request, invalid content
                        .json(err);
                } else {
                    return res
                        .status(201)
                        .json(trip);
                }
            });
        }
    );

}

// PUT: /trips/:tripCode - Adds a new a Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            Trip
                .findOneAndUpdate({'code': req.params.tripCode },{
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    image: req.body.image,
                    description: req.body.description
                }, { new: true })
                .then(trip => {
                    if (!trip) {
                        return res
                            .status(404)
                            .send({ message: "Trip not found with code " + req.params.tripCode });
                        }
                    res.send(trip);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                         return res
                            .status(404)
                            .send({ message: "Trip not found with code" + req.params.tripCode });
                        }
                        return res
                            .status(500) // server error
                            .json(err);
                });
        }
    );
} 


const tripsDeleteTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            console.log("inside trips.js on server #tripsDeleteTrip");
            Trip.findOneAndDelete({'code': req.params.tripCode})   
                .then(trip => {
                    if (!trip) {
                        return res
                            .status(404)
                            .send({
                                message: "Trip not found with code " + req.params.tripCode
                            });
            
                    }
                    res.send(trip);       
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res
                            .status(404)
                            .send({
                                message: "Trip not found with code " + req.params.tripCode
                            });
                    }
                    return res
                        .status(500) // server error
                        .json(err);
                });
                console.log("return from delete trip");

        }
    );
}

module.exports = {
    getUser,
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};