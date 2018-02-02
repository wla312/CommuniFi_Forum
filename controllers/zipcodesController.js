const db = require("../models");

// Defining methods for the zipcodesController
module.exports = {
  // find all in the zipcodes collection within the db
  findAll: function(req, res) {
    db.ZipCode
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find all where zipcode is equal to the zipcode value in our reqest (if a zipcode is in the DB more than once, it will find both)
  findByZip: function(req, res) {
  	db.ZipCode
  		.find().where({ zipCode : req.params.zip })
  		.then(dbModel => res.json(dbModel))
    	.catch(err => res.status(422).json(err));
  }
};