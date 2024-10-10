const Service = require('./service');

class InstructorService extends Service{
    constructor(){
        super('instructors');
    }
}

module.exports = InstructorService;