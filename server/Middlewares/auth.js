const jwt = require("jsonwebtoken");

const getMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
};

module.exports = {
  getMiddleware,
};
