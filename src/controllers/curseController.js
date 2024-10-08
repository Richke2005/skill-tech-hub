const Controller = require("./controller.js");
const CurseService = require("../services/curseServices.js");

const curseService = new CurseService();

class CurseController extends Controller{
    constructor(){
        super(curseService);
    }
}

module.exports = CurseController;