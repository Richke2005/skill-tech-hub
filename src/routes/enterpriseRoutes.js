const { Router } = require("express");
const EnterpriseController = require("../controllers/enterpriseController.js");

const router = Router();
const enterpriseController = new EnterpriseController();

router
.post("/enterprises", (req, res) => enterpriseController.post(req, res))
.get("/enterprises", (req, res) => enterpriseController.getAll(req, res))
.get("/enterprises/:id", (req, res) => enterpriseController.getById(req, res))
.put("/enterprises/:id", (req, res) => enterpriseController.update(req, res))
.delete("/enterprises/:id", (req, res) => enterpriseController.delete(req, res));



module.exports = router;