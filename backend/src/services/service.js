const DataSource = require("../database/models/index.js");

class Service {
    #service;

    constructor(serviceName) {
        if (!DataSource.models[serviceName]) {
            throw new Error(`Modelo ${serviceName} não encontrado em DataSource.`);
        }
        this.#service = serviceName;
    }

    async getAllReg() {
        return DataSource.models[this.#service].find();
    }

    async getRegBySearch(query = {}, projection = {}, options = {}) {
        return DataSource.models[this.#service].find(query, projection, options);
    }

    async getRegByAggregation(aggregation = []) {
        return DataSource.models[this.#service].aggregate(aggregation);
    }

    async getRegById(id) {
        return DataSource.models[this.#service].findById(id);
    }

    async postReg(doc) {
        return DataSource.models[this.#service].create(doc);
    }

    async updateReg(id, doc) {
        return DataSource.models[this.#service].findByIdAndUpdate(id, { $set: doc }, { new: true });
    }

    async deleteReg(id) {
        const deleted = await DataSource.models[this.#service].findByIdAndDelete(id);
        if (!deleted) {
            throw new Error(`Registro com ID ${id} não encontrado.`);
        }
        return deleted;
    }
}

module.exports = Service;






/*const DataSource = require("../database/models/index.js");

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

        async updateReg(id, doc) {
            return DataSource.models[this.#service].findByIdAndUpdate(id, { $set: doc }, { new: true });
        }
        

    async deleteReg(id){
        return DataSource.models[this.#service].findByIdAndDelete(id);
    }

    async deleteReg(id) {
        const deleted = await DataSource.models[this.#service].findByIdAndDelete(id);
        if (!deleted) {
            throw new Error(`Registro com ID ${id} não encontrado.`);
        }
        return deleted;
    }
    constructor(serviceName) {
        if (!DataSource.models[serviceName]) {
            throw new Error(`Modelo ${serviceName} não encontrado em DataSource.`);
        }
        this.#service = serviceName;
    }
        
}

module.exports = Service;*/