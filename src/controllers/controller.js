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
            const data = req.body;
            this.entityService.postReg(data);

        }catch(error){
            res.status(500).send({message: error});
        }
    }

    async update(req, res){

    }

    async delete(req, res){

    }
}