const { Router } = require("express");
const AreaController = require("../controllers/areaController.js");

const router = Router();
const areaController = new AreaController();

router
.post("/skilltech/api/v1/areas", (req, res) => areaController.post(req, res))
.get("/skilltech/api/v1/areas", (req, res) => areaController.getAll(req, res))
.get("/skilltech/api/v1/areas/curses", (req, res) => areaController.getAllCursesByArea(req, res))
.get("/skilltech/api/v1/areas/:id", (req, res) => areaController.getById(req, res))
.put("/skilltech/api/v1/areas/:id", (req, res) => areaController.update(req, res))
.delete("/skilltech/api/v1/areas/:id", (req, res) => areaController.delete(req, res));

module.exports = router;

