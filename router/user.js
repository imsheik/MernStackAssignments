const express = require("express");
const userController = require("../controller/userController");
const protect = require("../middlewares/protect");
const restrictTo = require("../middlewares/restrictTo");
const userAccess = require("../middlewares/userRoleAccess");
const router = express.Router();
const AppError = require("../utils/appError");

router.use(protect);

router
  .route("/getme")
  .get(userController.getMe, userController.getUser);


router.route("/admin").get(restrictTo("admin"), userController.admin);

router.route("/user").get(userAccess, userController.user);
module.exports = router;