const db = require("../models");

// Defining methods for the commentsController
module.exports = {
  // find all in the comments collection within the db
  findAll: function(req, res) {
    db.Comment.find(function(err, comments) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(comments)
    });
  },
  // find all in the comments collection with a matching zip
// model.find({
//     '_id': { $in: [
//         mongoose.Types.ObjectId('4ed3ede8844f0f351100000c'),
//         mongoose.Types.ObjectId('4ed3f117a844e0471100000d'), 
//         mongoose.Types.ObjectId('4ed3f18132f50c491100000e')
//     ]}
// }, function(err, docs){
//      console.log(docs);
// });



  // findByZip: function(req, res) {
  //   db.Comment.find().where({ zip: req.params.zip })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  findByZip: function(req, res) {
    db.Comment.find({ 'zip': req.params.zip }, function(err, comments){
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(comments)
    });
  },
  // post a new comment to the db
  create: function(req, res) {
  	db.Comment.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update a comment based on the comment id
  findById: function(req, res) {
    db.Comment.findById(req.params.comment_id, function(err, comment) {
      if (err)
       res.send(err);
      //setting the new author and text to whatever was changed. If nothing was changed
      // we will not alter the field.
      (req.body.author) ? comment.author = req.body.author : null;
      (req.body.text) ? comment.text = req.body.text : null;
      //save comment
      comment.save(function(err) {
       if (err)
         res.send(err);
       res.json({ message: 'Comment has been updated' });
      });
    });
  },
  remove: function(req, res) {
    db.Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
      if (err)
        res.send(err);
      res.json({ message: 'Comment has been deleted' })
    });
  }
};