const DataSource = require("../database/models/index.js");

class Service{
    #service;
    constructor(serviceName){
        this.#service = serviceName;
    }

    async getAllReg(){
        return DataSource.models[this.#service].find();
    }

    async getRegBySearch(query = {}, projection = {}, options = {}){
        return DataSource.models[this.#service].find(query, projection, options);
    }

    async getRegByAggregation(aggregation = []){
        return DataSource.models[this.#service].aggregate(aggregation);
    }

    async getRegById(id){
        return DataSource.models[this.#service].findById(id);
    }

    async postReg(doc){
        return DataSource.models[this.#service].create(doc);
    }

    async updateReg(id, doc){
        return DataSource.models[this.#service].findByIdAndUpdate(id, {$set: doc});
    }

    async deleteReg(id){
        return DataSource.models[this.#service].findByIdAndDelete(id);
    }
}

module.exports = Service;