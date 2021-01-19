//req,res,next
//const token = req.headers.Authorizaion;
const { checkTokenExpiry } = require("../../utils");
const checkToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    await checkTokenExpiry(token);
    return await next();
  } catch (error) {
    console.log("Error...", error);
    return res.status(401).send({
      token: "Invalid or expired token",
    });
  }
};
module.exports = { checkToken };
