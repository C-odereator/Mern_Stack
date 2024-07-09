const express = require("express");
const { home, register, login } = require("../Controllers/controllers");
const validate = require("../Middlewares/middleware");
const router = express.Router();
const { signupSchema } = require("../Vallidators/validators.js");

router.route("/").get(home);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(login);

module.exports = {
  router,
};
