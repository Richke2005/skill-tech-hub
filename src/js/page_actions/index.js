const EnterpriseService = require('../services/enterpriseService.js');

const enterpriseService = new EnterpriseService();

enterpriseService.getAllData().then((response) => console.log(response));