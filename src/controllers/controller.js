class Controller{
    #entityService
    constructor(service){
        this.#entityService = service;
    }

    async getAll(req, res){
        try{
            const documents = await this.#entityService.getAllReg();
            return res.status(200).send(documents);
        }catch(error){
            return res.status(500).send({message: error});
        }
    }

    async getById(req, res){
        try{
            const { id } = req.params;
            const document = await this.#entityService.getRegById(id);
            return res.status(200).send(document);
        }catch(error){
            return res.status(400).send({message: error});
        }
    }

    async post(req, res){
        try{
            const doc = req.body;
            const savedDocument = await this.#entityService.postReg(doc);
            res.status(201).send({createdDoc: savedDocument});
        }catch(error){
            return res.status(500).send({message: error});
        }
    }

    async update(req, res){
        try{
            const { id } = req.params;
            const doc = req.body;
            await this.#entityService.updateReg(id, doc);
            return res.status(200).send({message: `Document with ID: ${id} successfully updated`});
        }catch(error){
            return res.status(500).send({message: error});
        }
    }

    async delete(req, res){
        try{
            const { id } = req.params;
            const deletedDocument = await this.#entityService.deleteReg(id);
            return res.status(200).send({deletedDoc: deletedDocument});
        }catch(error){
            return res.status(500).send({message: error});
        }
    }
}

module.exports = Controller;