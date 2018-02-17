const router = require("express").Router();
const zipRoutes = require("./zipcodes");
const commentRoutes = require("./comments");

// zipcodes routes, "/api/zipcodes"
router.use("/zipcodes", zipRoutes);

// messenger/forum routes, "/api/comments"
router.use("/comments", commentRoutes);

module.exports = router;