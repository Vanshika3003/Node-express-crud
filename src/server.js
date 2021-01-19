require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { checkToken } = require("./middlewares/auth");
const { connectDb } = require("./db/init");
const {
  saveProduct,
  deleteProduct,
  getProducts,
  updateProducts,
} = require("./controllers/productsController");
const { saveUser, login } = require("./controllers/usersController");
//const { router } = require("./app");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/user/login", login);
app.get("/products", getProducts);
app.post("/user/signup", saveUser);

app.use(checkToken);
app.post("/product", saveProduct);
app.delete("/product/:id", deleteProduct);
app.put("/product", updateProducts);

app.listen(process.env.PORT, async function () {
  await connectDb();
  console.log(`app listening on port ${process.env.PORT}`);
});
