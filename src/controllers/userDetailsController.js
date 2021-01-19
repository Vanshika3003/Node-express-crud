const Details = require("../model/userDetails");
const saveUserDetails = async (payload) => {
  const userModel = new Details(payload);
  await userModel.save(userModel);
  return;
};
module.exports = { saveUserDetails };
