const Service = require("./service.js");
const { ObjectId } = require("mongoose").Types;

class EnterpriseService extends Service{
    constructor(){
        super("enterprises");
    }

    async getUsersByEnterpriseId(id){
        return super.getRegByAggregation([
            {
                $match: {
                    _id: new ObjectId(id) 
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "enterprise._id",
                    as: "users"
                }
            },
            {
                $project: {
                    password: 0,
                    cnpj: 0,
                    location: 0,
                  "users.password": 0, 
                  "users.cpf": 0, 
                  "users.enterprise": 0, 
                  "users.curses":0
                }
            }
        ])
    }
}

module.exports = EnterpriseService;