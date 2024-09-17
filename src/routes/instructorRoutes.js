const { Router } = require("express");
const InstructorController = require("../controllers/instructorController.js");

const router = Router();
const instructorController = new InstructorController();

router
.get("/instructors", (req, res) => instructorController.getAll(req, res));

module.exports = router;