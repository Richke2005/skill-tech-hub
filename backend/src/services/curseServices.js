const Service = require("./service.js");
const { ObjectId } = require("mongoose").Types;

class CurseService extends Service{
    constructor(){
        super("Curse");
    }

    async getCurseBySearch(query){
        const {title, desc, classification, instructor} = query;

        let search = {};
        
        if(title) search.title = { $regex: title, $options: 'i' };
        if(desc) search.desc = { $regex: desc, $options: 'i' };
        if(classification) search = {'classification.name': { $regex: classification, $options: 'i' }};
        
        if(instructor) search = {'instructor.name': { $regex: instructor, $options: 'i' }};

        return super.getRegBySearch(search);
    }

    async getInstructorByCurseId(id){
        return super.getRegByAggregation([
            {
                $match: {
                    _id: new ObjectId(id) 
                }
            },
            {
                $lookup: {
                    from: "instructors",
                    localField: "instructor._id",
                    foreignField: "_id",
                    as: "instructor"
                }
            },
            {
                $unwind: "$instructor"
            },
            {
                $project: {
                    "instructor._id": 0,
                    modules: 0
                }
            }
        ])
    }

    async searchRecentCurses(){
        return super.getRegByAggregation([
            {
                $sort: {
                    createdAt: -1
                }
            },
            {
                $limit: 4
            },
            {
                $project: {
                    modules: 0
                }
            }
        ]);
    }
}

module.exports = CurseService;