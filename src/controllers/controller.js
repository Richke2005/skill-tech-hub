class Controller{
    constructor(service){
        this.entityService = service;
    }

    async getAll(req, res){

    }

    async getById(req, res){
        try{
            const { id } = req.params;
        }catch(error){

        }
    }

    async post(req, res){
        try{
            const doc = req.body;
            const savedDocument = await this.entityService.postReg(doc);
            res.status(201).send({message: `sucess to create document: ${savedDocument}`});
        }catch(error){
            res.status(500).send({message: error});
        }
    }

    async update(req, res){

    }

    async delete(req, res){

    }
}

module.exports = Controller;