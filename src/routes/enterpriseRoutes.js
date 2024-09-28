const { Router } = require("express");
const EnterpriseController = require("../controllers/enterpriseController.js");

const router = Router();
const enterpriseController = new EnterpriseController();

router
.post("/skilltech/api/v1/enterprises", (req, res) => enterpriseController.post(req, res))
.get("/skilltech/api/v1/enterprises", (req, res) => enterpriseController.getAll(req, res))
.get("/skilltech/api/v1/enterprises/:id", (req, res) => enterpriseController.getById(req, res))
.put("/skilltech/api/v1/enterprises/:id", (req, res) => enterpriseController.update(req, res))
.delete("/skilltech/api/v1/enterprises/:id", (req, res) => enterpriseController.delete(req, res));

module.exports = router;