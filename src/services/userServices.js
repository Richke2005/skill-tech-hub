const Service = require("./service.js");

class UserService extends Service{
    constructor(){
        super("users");
    }

    async getUsersBySearch(query){
    const {name, email, password, areaOfInterest} = query;


    let search = {};

    if(name) search.name = { $regex: name, $options: 'i' };
    if(email) search.email = email;
    if(password) search.password = password;
    if(areaOfInterest) search.areas_of_interest = areaOfInterest;

    return await super.getRegBySearch(search);
    }
}

module.exports = UserService;