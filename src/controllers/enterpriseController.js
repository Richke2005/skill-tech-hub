const Controller = require("./controller.js");
const EnterpriseService = require("../services/enterpriseServices.js");

const enterpriseService = new EnterpriseService();

class EnterpriseController extends Controller{
    constructor(){
        super(enterpriseService);
    }

    async getAllUsersByEnterpriseId(req, res){
        try{
            const { id } = req.params;
            const response = await enterpriseService.getUsersByEnterpriseId(id);
            
            if(response.length == 0) 
                return res.status(204).send({message: "cannot get any register"});

            return res.status(200).send(response);
        }catch(error){
            return res.status(400).send({error: error.message});
        }
    }
}

module.exports = EnterpriseController;