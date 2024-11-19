const { Router } = require("express");
const UserController = require("../controllers/userController.js");

const router = Router();
const userController = new UserController();

router
.post("/skilltech/api/v1/users", (req, res) => userController.post(req, res))
.get("/skilltech/api/v1/users", (req, res) => userController.getAll(req, res))
.get("/skilltech/api/v1/users/search", (req, res) => userController.getUsersBySearch(req, res))
.get("/skilltech/api/v1/users/:id", (req, res) => userController.getById(req, res))
.get("/skilltech/api/v1/users/:id/curses", (req, res) => userController.getCursesByUserId(req, res))
.put("/skilltech/api/v1/users/:id", (req, res) => userController.update(req, res))
.delete("/skilltech/api/v1/users/:id", (req, res) => userController.delete(req, res));

module.exports = router;
