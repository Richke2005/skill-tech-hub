const Service = require('./service');

class EnterpriseService extends Service{
    constructor(){
        super('enterprises');
    }
}

module.exports = EnterpriseService;