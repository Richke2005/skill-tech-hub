const Service = require('./service');

class UserService extends Service{
    constructor(){
        super('users');
    }
}

module.exports = UserService;