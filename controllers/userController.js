const db = require("../models");
// Defining methods for the commentsController
module.exports = {
  // find all in the comments collection within the db
  findAll: function(req, res) {
    db.User.find(function(err, User) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(User)
    });
  },
  // findByZip: function(req, res) {
  //   db.Comment.find({ 'zip': req.params.zip }, function(err, comments){
  //     if (err)
  //       res.send(err);
  //     //responds with a json object of our database comments.
  //     res.json(comments)
  //   });
  // },
  // post a new comment to the db
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update a comment based on the comment id
//   findById: function(req, res) {
//     db.Comment.findById(req.params.comment_id, function(err, comment) {
//       if (err)
//        res.send(err);
//       //setting the new author and text to whatever was changed. If nothing was changed
//       // we will not alter the field.
//       (req.body.author) ? comment.author = req.body.author : null;
//       (req.body.text) ? comment.text = req.body.text : null;
//       //save comment
//       comment.save(function(err) {
//        if (err)
//          res.send(err);
//        res.json({ message: 'Comment has been updated' });
//       });
//     });
//   },
//   remove: function(req, res) {
//     db.Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
//       if (err)
//         res.send(err);
//       res.json({ message: 'Comment has been deleted' })
//     });
//   }
};