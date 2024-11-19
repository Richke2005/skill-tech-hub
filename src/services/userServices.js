const Service = require("./service.js");
const { ObjectId } = require("mongoose").Types;

class UserService extends Service{
    constructor(){
        super("users");
    }

    async searchUsersBySearch(query){
    const {name, email, password, areaOfInterest} = query;


    let search = {};

    if(name) search.name = { $regex: name, $options: 'i' };
    if(email) search.email = email;
    if(password) search.password = password;
    if(areaOfInterest) search.areas_of_interest = areaOfInterest;

    return await super.getRegBySearch(search);
    }

    async searchCursesByUserId(userId){
        return await super.getRegByAggregation([
            {
                $match: {
                    _id: new ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from: "curses",
                    localField: "curses",
                    foreignField: "_id",
                    as: "curses"
                }
            }
        ])
    }
}

module.exports = UserService;