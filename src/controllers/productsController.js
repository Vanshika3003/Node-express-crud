const Product = require("../model/productsModel");
const saveProduct = async (req, res) => {
  console.log(req.body);
  const { name, price, description, quantity } = req.body;
  const product = { name, price, description, quantity };
  const productModel = new Product(product);
  await productModel.save(productModel);
  res.status(200).send({
    status: "Created 200 OK",
  });
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log("Id...", id);
  await Product.findByIdAndRemove({ _id: id });
  res.status(200).send({
    status: "Deleted 200 OK",
  });
};
const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).send({
    products,
  });
};

const updateProducts = async (req, res) => {
  console.log(req.body);
  const { name, price, description, quantity, id } = req.body;
  await Product.findOneAndUpdate({ _id: id }, { ...req.body });
  res.status(200).send({
    status: "Updated 200 OK",
  });
};

module.exports = { saveProduct, deleteProduct, getProducts, updateProducts };
