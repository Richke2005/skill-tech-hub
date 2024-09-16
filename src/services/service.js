const dataSource = require("../database/models/index.js");

class Service{
    constructor(modelName){
        this.model = modelName;
    }

    async getAllReg(){
        return dataSource.models[this.model].find();
    }
}

module.exports = Service;