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

    async getDataById(id){
        const response = await fetch(`${this.#url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    async postData(data){
        const response = await fetch(this.#url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async putData(id, data){
        const response = await fetch(`${this.#url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async deleteData(id){
        const response = await fetch(`${this.#url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }
}

module.exports = Service;