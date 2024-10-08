class EnterpriseServices {
    #url;
    constructor(){
        this.#url = 'https://localhost:3001/skilltech/api/v1/enterprises';
    }

    async getEnterpriseData(){
        const response = await fetch(this.#url);
    }
}