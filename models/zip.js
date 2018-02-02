const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zipSchema = new Schema({
  zipCode: { type: Number, required: true },
  hasCommunityISP: { type: Boolean, required: true },
});

const ZipCode = mongoose.model("ZipCode", zipSchema);

module.exports = ZipCode;