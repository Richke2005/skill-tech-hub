const { Router } = require("express");
const InstructorController = require("../controllers/instructorController.js");

const router = Router();
const instructorController = new InstructorController();

router
.post("/skilltech/api/v1/instructors", (req, res) => instructorController.post(req, res))
.get("/skilltech/api/v1/instructors", (req, res) => instructorController.getAll(req, res))
.get("/skilltech/api/v1/instructors/:id", (req, res) => instructorController.getById(req, res))
.put("/skilltech/api/v1/instructors/:id", (req, res) => instructorController.update(req, res))
.delete("/skilltech/api/v1/instructors/:id", (req, res) => instructorController.delete(req, res));

module.exports = router;