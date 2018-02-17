const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = mongoose.Schema({ 
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;