const Controller = require("./controller.js");
const EnterpriseService = require("../services/enterpriseServices.js");

const enterpriseService = new EnterpriseService();

class EnterpriseController extends Controller{
    constructor(){
        super(enterpriseService);
    }
}

module.exports = EnterpriseController;