const Controller = require("./controller.js");
const CurseService = require("../services/curseServices.js");

const curseService = new CurseService();

class CurseController extends Controller{
    constructor(){
        super(curseService);
    }

    async getCurseByQuery(req, res){
        try{
            const query = req.query;
            const result = await curseService.getCurseBySearch(query);
            if(result.length == 0)
                return res.status(404).send({message: "No results found"});

            return res.status(200).send(result);
        }catch(err){
            return res.status(500).send({error: err.message});
        }
    }

    async getInstructorInfo(req, res){
        try{
            const { id } = req.params;
            const result = await curseService.getInstructorByCurseId(id);
            if(result.length == 0)
                return res.status(404).send({message: "No results found"});

            return res.status(200).send(result);
        }catch(err){
            return res.status(500).send({error: err.message});
        }
    }
}

module.exports = CurseController;