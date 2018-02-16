const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
//const keys = require('./keys');

passport.use(
   new GoogleStrategy({
       //options for google strat

       
       callbackURL: '/',
       clientID: '290666916648-gbe1ongbbj3peuvfgoe3ebtplthn300c.apps.googleusercontent.com',
       clientSecret: 'yy0M2fRn4wqZrASNnBVrQk8e'


   },()=>{
       //passport callback function
       console.log('we hit our passport callback!!!');
   })

)