const router = require("express").Router();
const zipRoutes = require("./zipcodes");
const commentRoutes = require("./comments");
const passport = require('passport');


// zipcodes routes, "/api/zipcodes"
router.use("/zipcodes", zipRoutes);

// messenger/forum routes, "/api/comments"
router.use("/comments", commentRoutes);

router.get('/google',passport.authenticate('google',{
    scope: ['email']
}));

module.exports = router;