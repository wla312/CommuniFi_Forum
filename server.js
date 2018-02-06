const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// stackoverflow troubleshooting suggestion, but didn't seem to resolve...
// const cors = require("cors");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// app.use(cors());
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// stackoverflow troubleshooting suggestion, but didn't seem to resolve...
// app.use(function(req, res, next) {
//  res.setHeader('Access-Control-Allow-Origin', '*');
//  res.setHeader('Access-Control-Allow-Credentials', 'true');
//  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
// //and remove cacheing so we get the most recent appointments
//  res.setHeader('Cache-Control', 'no-cache');
//  next();
// });



// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ispyourself",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
