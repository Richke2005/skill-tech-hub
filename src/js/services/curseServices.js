const Service = require('./service');

class CurseService extends Service{
    constructor(){
        super('curses');
    }
}

module.exports = CurseService;