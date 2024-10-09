class Service {
    #entity;
    #url;
    constructor(entity){
        this.#entity = entity;
        this.#url = `http://192.168.0.10:3001/skilltech/api/v1/${this.#entity}`;
    }

    async getAllData(){
        const response = await fetch(this.#url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }
}

module.exports = Service;