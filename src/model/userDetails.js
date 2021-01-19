const mongoose = require("mongoose");
const userdetails = mongoose.Schema({
  id: {
    type: String,
  },
  token: {
    type: String,
  },
  email: {
    type: String,
  },
});
module.exports = Details = mongoose.model("userDetails", userdetails);
