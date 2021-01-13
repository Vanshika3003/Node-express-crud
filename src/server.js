require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const { connectDb } = require("./db/init");
const {
  saveProduct,
  deleteProduct,
  getProducts,
  updateProducts,
} = require("./controllers/productsController");
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.post("/product", saveProduct);
app.delete("/product/:id", deleteProduct);
app.get("/products", getProducts);
app.put("/product", updateProducts);
app.listen(process.env.PORT, async function () {
  await connectDb();
  console.log(`app listening on port ${process.env.PORT}`);
});
