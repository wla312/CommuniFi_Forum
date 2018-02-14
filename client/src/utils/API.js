import axios from "axios";

export default {
  // Gets all zipcodes
  getZips: function() {
    return axios.get("/api/zipcodes");
  },
  getOneZip: function(zip) {
  	return axios.get("/api/zipcodes/" + zip);
  },
  updateOneZip: function(zip) {
    return axios.put("/api/zipcodes/" + zip);
  },
  getComments: function() {
  	return axios.get("/api/comments");
  },
  submitComment: function(messageData) {
    return axios.post("/api/comments", messageData);
  },
  getCommentsByZip: function(zip) {
    return axios.get("/api/comments/" + zip);
  }
};
