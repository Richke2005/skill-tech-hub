const Controller = require("./controller.js");
const UserService = require("../services/userServices.js");

const userService = new UserService();

class UserController extends Controller{
    constructor(){
        super(userService);
    }

    async getUsersBySearch(req, res){
        try{
            const query = req.query;
            const data = await userService.searchUsersBySearch(query);
            if(data.length === 0) 
                return res.status(404).send({message: "No user found"});
            return res.status(200).send(data);
        }catch(err){
            return res.status(400).send({message: err.message});
        }
     
    }

    async getCursesByUserId(req, res){
        try{
            const userId = req.params.id;
            const data = await userService.searchCursesByUserId(userId);
            if(data.length === 0) 
                return res.status(404).send({message: "No User founded with this Id"});
            return res.status(200).send(data);
        }catch(err){
            return res.status(400).send({message: err.message});
        }
    }
}

module.exports = UserController;