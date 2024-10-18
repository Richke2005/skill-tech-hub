const Service = require('./service');

class AreaService extends Service{
    constructor(){
        super('areas');
    }

    async getCursesByArea(){
        const response = await fetch(`${this.url}/curses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }
}

module.exports = AreaService;