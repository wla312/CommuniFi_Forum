const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// if the route matches "/api/comments"
router.route("/")
  // .get(commentsController.findByZip)
  .get(commentsController.findAll)
  .post(commentsController.create);

// Matches with "/api/comments/:comment_id"
router.route("/:zip")
	.get(commentsController.findByZip)
  // .route("/:comment_id")
  // .put(commentsController.findById)
  // .delete(commentsController.remove);


module.exports = router;