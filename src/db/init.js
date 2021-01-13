require("dotenv").config();
const mongoose = require("mongoose");
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@productscluster.95dfd.mongodb.net/products?retryWrites=true&w=majority`;
const connectDb = async () => {
  await mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("DB Connected");
  return;
};
module.exports = { connectDb };
