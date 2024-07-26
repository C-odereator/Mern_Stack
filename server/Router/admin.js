const express = require("express");
const {
  getAllUser,
  getAllContact,
  deleteUserById,
  getUserById,
  updateUserById,
} = require("../Controllers/admin");

const { getMiddleware } = require("../Middlewares/auth");
const { adminMiddleware } = require("../Middlewares/admin");
const admin = express.Router();

admin.route("/").get(getMiddleware, adminMiddleware, getAllUser);

admin.route("/:id").get(getMiddleware, adminMiddleware, getUserById);

admin
  .route("/delete/:id")
  .delete(getMiddleware, adminMiddleware, deleteUserById);

admin
  .route("/update/:id")
  .patch(getMiddleware, adminMiddleware, updateUserById);

admin.route("/contact").get(getAllContact);

module.exports = {
  admin,
};
