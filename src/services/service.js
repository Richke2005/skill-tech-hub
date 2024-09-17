const DataSource = require("../database/models/index.js");

class Service{
    constructor(serviceName){
        this.service = serviceName;
    }

    async getAllReg(){
        return new DataSource.models[this.service].find();
    }

    async getRegById(id){
        return DataSource.models[this.service].findById(id);
    }

    async postReg(doc){
        return DataSource.models[this.service].create(doc);
    }
}

module.exports = Service