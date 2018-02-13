const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  author: String,
  text: String
});

const Comment = mongoose.model("Comment", CommentsSchema);

module.exports = Comment;