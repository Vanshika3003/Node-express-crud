require("dotenv").config();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const passwordHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const signJwt = (firstname, lastname, role, username, email) => {
  return new Promise((res, rej) => {
    //fname,lname,email,role,username
    const payload = {
      firstname,
      lastname,
      role,
      username,
      email,
    };

    const options = {
      expiresIn: "1h",
    };
    jwt.sign(payload, process.env.JWT_SECRET, options, (err, token) => {
      if (err) rej(err);
      res(token);
    });
  });
};
const checkTokenExpiry = async (token) => {
  return new Promise((res, rej) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) rej(err);
      res(decoded);
    });
  });
};

const comparePassword = async (dbPassword, loginPassword) => {
  // check user password with hashed password stored in the database
  const validPassword = await bcrypt.compare(loginPassword, dbPassword);
  if (validPassword) {
    return { status: true };
  } else {
    return { status: false };
  }
};

module.exports = { signJwt, passwordHash, comparePassword, checkTokenExpiry };
