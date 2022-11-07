const express = require("express");
const { authControllers } = require("../../controllers");
const { authenticate } = require("../../middlewares");
const { upload } = require("../../middlewares");

const router = express.Router();

router.post("/register", authControllers.register);

router.get("/verify/:verificationToken", authControllers.verify);

router.get("/verify", authControllers.resentVerify);

router.post("/login", authControllers.login);

router.get("/current", authenticate, authControllers.getCurrent);

router.get("/logout", authenticate, authControllers.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authControllers.updateAvatar
);

module.exports = router;
