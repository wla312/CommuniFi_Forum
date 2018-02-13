const router = require("express").Router();
const zipcodesController = require("../../controllers/zipcodesController");

// if the route matches "/api/zipcodes"
router.route("/")
  .get(zipcodesController.findAll);
//   .post(booksController.create);

// Matches with "/api/zipcodes/:zip"
router
  .route("/:zip")
  .get(zipcodesController.findByZip)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
