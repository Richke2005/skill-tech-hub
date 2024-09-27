const Service = require("./service.js");

class EnterpriseService extends Service{
    constructor(){
        super("enterprises");
    }
}

module.exports = EnterpriseService;