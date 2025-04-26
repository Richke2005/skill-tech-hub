const Service = require('./service');

class UserService extends Service{
    constructor(){
        super('users');
    }

    async getUserByAuth(email){
        const response = await fetch(`${this.url}/search?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    async getUserCurses(id){
        const response = await fetch(`${this.url}/${id}/curses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }
}

module.exports = UserService;