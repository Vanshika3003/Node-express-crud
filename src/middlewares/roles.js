const { checkTokenExpiry } = require("../../utils");
const rolesAssigned = {
  POST: {
    "/product": ["admin"],
  },
  DELETE: {
    "/product/:id": ["admin"],
  },
  PUT: {
    "/product": ["admin"],
  },
};
const checkRoles = async (req, res, next) => {
  const token = req.headers.authorization;
  const requiredRoles = rolesAssigned[req.method][req.originalUrl];
  const decodedToken = await checkTokenExpiry(token);
  if (decodedToken) {
    for await (const role of requiredRoles) {
      if (role === decodedToken.role) {
        return await next();
      }
    }
    return res.status(401).send({ message: "Forbidden" });
  } else return res.status(401).send({ message: "Forbidden" });
  //Check by decoding the token if user has the assigned role or not
};
module.exports = { checkRoles };
