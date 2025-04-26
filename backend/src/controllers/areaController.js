const Controller = require("./controller.js");
const AreaService = require("../services/areaServices.js");

const areaService = new AreaService();

class AreaController extends Controller{
    constructor(){
        super(areaService);
    }
    
    async getAllCursesByArea(req, res){
        try{
            const response = await areaService.getCursesByArea();
            if(response.length == 0) 
                return res.status(204).send({message: "cannot get any register"});

            return res.status(200).send(response);
        }catch(error){
            return res.status(400).send({error: error.message});
        }
    }
}

module.exports = AreaController;