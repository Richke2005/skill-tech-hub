const Service = require('./service');

class CurseService extends Service{
    constructor(){
        super('curses');
    }

    async getCursesLimiting(){
        const response = await fetch(`${this.url}/home`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }
}

module.exports = CurseService;