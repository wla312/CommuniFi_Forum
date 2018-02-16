const router = require("express").Router();
const zipRoutes = require("./zipcodes");
const passport = require('passport');



// zipcodes routes, "/api/zipcodes"
router.use("/zipcodes", zipRoutes);

router.get('/google',passport.authenticate('google',{
    scope: ['email']
}));

module.exports = router;