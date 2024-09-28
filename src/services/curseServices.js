const Service = require("./service.js");

class CurseService extends Service{
    constructor(){
        super("curses");
    }
}

module.exports = CurseService;