express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const config = require('./config');
const passportSetup = require("./client/services/passport-setup");
const index = require("./routes/api/index");

// connect to the database and load models
require('./server/models').connect(config.dbUri);

// stackoverflow troubleshooting suggestion, but didn't seem to resolve...
// const cors = require("cors");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// app.use(cors());
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
// app.use('/api', authCheckMiddleware);

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
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
// Add routes, both API and view
// app.use(routes);
// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', index);


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