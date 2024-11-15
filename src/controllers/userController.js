const Controller = require("./controller.js");
const UserService = require("../services/userServices.js");

const userService = new UserService();

class UserController extends Controller{
    constructor(){
        super(userService);
    }

    async getBySearch(req, res){
        try{
            const query = req.query;
            const data = await userService.getUsersBySearch(query);
            if(data.length === 0) 
                return res.status(404).send({message: "No user found"});
            return res.status(200).send(data);
        }catch(err){
            return res.status(400).send({message: err.message});
        }
     
    }
}

module.exports = UserController;