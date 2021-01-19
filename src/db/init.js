require("dotenv").config();
const mongoose = require("mongoose");
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@productscluster.95dfd.mongodb.net/FullStack?retryWrites=true&w=majority`;
const connectDb = async () => {
  await mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("DB Connected");
  return;
};
module.exports = { connectDb };

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://vanshika-kathuria:<password>@productscluster.95dfd.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
