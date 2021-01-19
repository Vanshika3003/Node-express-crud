const User = require("../model/usersModel");
const { saveUserDetails } = require("./userDetailsController");

const { passwordHash, comparePassword, signJwt } = require("../../utils");

console.log(passwordHash);

const saveUser = async (req, res) => {
  console.log(req.body);
  const { firstname, lastname, email, username, password, role } = req.body;
  const hashedPassword = await passwordHash(password);
  const user = {
    firstname,
    lastname,
    email,
    username,
    password: hashedPassword,
    role,
  };
  const userModel = new User(user);
  await userModel.save(userModel);
  res.status(200).send({
    status: "Created 200 OK",
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  const validPassword = await comparePassword(user.password, password);
  if (!validPassword.status) {
    return res.status(401).send({ message: "Password not correct" });
  }

  const { firstname, lastname, role, username, _id } = user;
  const jwt = await signJwt(firstname, lastname, role, username, email);
  const details = await saveUserDetails({ id: _id, token: jwt, email });
  console.log(jwt);

  res.status(200).send({
    email,
    jwt,
  });
};
module.exports = { saveUser, login };
