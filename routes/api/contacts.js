const express = require("express");

const router = express.Router();

const { contactControllers } = require("../../controllers");
const { isValidId } = require("../../middlewares");
const { authenticate } = require("../../middlewares");

router.get("/", authenticate, contactControllers.listContacts);

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  contactControllers.getContactById
);

router.post("/", authenticate, contactControllers.addContact);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  contactControllers.removeContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  contactControllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  contactControllers.updateFavorite
);

module.exports = router;
