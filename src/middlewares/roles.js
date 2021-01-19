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
  //Check by decoding the token if user has the assigned role or not
};
