const express = require("express");
const {
  getAllUser,
  getAllContact,
  deleteUserById,
} = require("../Controllers/admin");

const { getMiddleware } = require("../Middlewares/auth");
const { adminMiddleware } = require("../Middlewares/admin");
const admin = express.Router();

admin.route("/").get(getMiddleware, adminMiddleware, getAllUser);

admin
  .route("delete/:id")
  .delete(getMiddleware, adminMiddleware, deleteUserById);

admin.route("/contact").get(getAllContact);

module.exports = {
  admin,
};
