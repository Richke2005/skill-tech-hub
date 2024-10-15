const Service = require("./service.js");

class AreaService extends Service{
    constructor(){
        super("areas");
    }

    async getCursesByArea(){
        return super.getRegByAggregation([
            {
                $lookup: {
                    from: "curses",
                    localField: "_id",
                    foreignField: "classification.area_id",
                    as: "curses"
                }
            },
            {
                $project: {
                    "curses.classification": 0, "curses.modules": 0
                }
            }
        ])
    }
}

module.exports = AreaService;