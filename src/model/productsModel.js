const mongoose = require("mongoose");
const product = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
});
module.exports = Product = mongoose.model("product", product);
