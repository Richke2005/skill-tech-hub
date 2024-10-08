const Service = require("../../services/service.js");

(async () => {
    const instrutores = await new Service("instructors").postReg({
        name: "richard",
        email: "richardke18@", 
        specialty: "robotics",
        social_midia: ["email", "linkedin"]
    });
    
    console.log(instrutores);
})();
