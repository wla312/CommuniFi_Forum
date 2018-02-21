const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;