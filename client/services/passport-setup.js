const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
//const keys = require('./keys');
// passport.use(
//    new GoogleStrategy({
//        //options for google strat
       
//        callbackURL: '/',
//        clientID: '290666916648-gbe1ongbbj3peuvfgoe3ebtplthn300c.apps.googleusercontent.com',
//        clientSecret: 'yy0M2fRn4wqZrASNnBVrQk8e'
//    },
//    ()=>{
//        //passport callback function
//        console.log('we hit our passport callback!!!');
//    })
// )
passport.use(new GoogleStrategy({  
    clientID: '290666916648-gbe1ongbbj3peuvfgoe3ebtplthn300c.apps.googleusercontent.com',
    clientSecret: 'yy0M2fRn4wqZrASNnBVrQk8e',
    callbackURL: 'https://arcane-ridge-17845.herokuapp.com/',
  },
    function(token, refreshToken, profile, done) {
      process.nextTick(function() {
        User.findOne({ 'google.id': profile.id }, function(err, user) {
          if (err)
            return done(err);
          if (user) {
            return done(null, user);
          } else {
            var newUser = new User();
            newUser.google.id = profile.id;
            newUser.google.token = token;
            newUser.google.name = profile.displayName;
            newUser.google.email = profile.emails[0].value;
            newUser.save(function(err) {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      });
    },
    
   ()=>{
       //passport callback function
       console.log('we hit our passport callback!!!');
   })
)