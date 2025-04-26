class Service {
    #entity;
    url;

    /**
     * Construtor da classe Service.
     * @param {string} entity - A entidade para a qual o serviço será utilizado.
     */
    constructor(entity) {
        this.#entity = entity;
        this.url = `http://127.0.0.1:3001/skilltech/api/v1/${this.#entity}`;
    }

    /**
     * Obtém todos os dados da entidade.
     * @returns {Promise<Object>} - Uma promessa que resolve com os dados da entidade.
     */
    async getAllData() {
        const response = await fetch(this.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    /**
     * Obtém os dados de uma entidade específica pelo ID.
     * @param {string} id - O ID da entidade.
     * @returns {Promise<Object>} - Uma promessa que resolve com os dados da entidade.
     */
    async getDataById(id) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    /**
     * Envia dados para a entidade.
     * @param {Object} data - Os dados a serem enviados.
     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.
     */
    async postData(data) {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    /**
     * Atualiza os dados de uma entidade específica pelo ID.
     * @param {string} id - O ID da entidade.
     * @param {Object} data - Os dados a serem atualizados.
     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.
     */
    async putData(id, data) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    /**
     * Deleta uma entidade específica pelo ID.
     * @param {string} id - O ID da entidade.
     * @returns {Promise<Object>} - Uma promessa que resolve com a resposta do servidor.
     */
    async deleteData(id) {
        const response = await fetch(`${this.url}/${id}`, {
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