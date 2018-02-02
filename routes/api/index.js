const router = require("express").Router();
const zipRoutes = require("./zipcodes");

// zipcodes routes, "/api/zipcodes"
router.use("/zipcodes", zipRoutes);

module.exports = router;