const userController = require("../controllers/user")
const express = require("express");

const router = express.Router();

// http://localhost:3100/api/v1/users/new-user
router.post("/new-user",userController.createUser);

// http://localhost:3100/api/v1/users/
router.get("/", userController.getAllUsers);

// http://localhost:3100/api/v1/users/new-user?id=****
router.get("/:id", userController.getUserById);

// http://localhost:3100/api/v1/users/new-user?id=****
// router.patch("/:id", userController.updateUserById);
router.put("/:id", userController.updateUserById);

// http://localhost:3100/api/v1/users/new-user?id=****
router.delete("/:id", userController.deleteUserById);

module.exports = router;
