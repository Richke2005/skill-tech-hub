const { Router } = require("express");
const CurseController = require("../controllers/curseController.js");

const router = Router();
const curseController = new CurseController();

router
.post("/skilltech/api/v1/curses", (req, res) => curseController.post(req, res))
.get("/skilltech/api/v1/curses", (req, res) => curseController.getAll(req, res))
.get("/skilltech/api/v1/curses/:id", (req, res) => curseController.getById(req, res))
.put("/skilltech/api/v1/curses/:id", (req, res) => curseController.update(req, res))
.delete("/skilltech/api/v1/curses/:id", (req, res) => curseController.delete(req, res));

module.exports = router;

