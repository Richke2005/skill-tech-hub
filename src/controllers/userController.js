const Controller = require("./controller.js");
const UserService = require("../services/userServices.js");

const userService = new UserService();

class UserController extends Controller{
    constructor(){
        super(userService);
    }
}

module.exports = UserController;