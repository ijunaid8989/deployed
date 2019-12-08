'use strict';
module.exports = function(app) {
 var server = require('../controllers/serverController');

  app
    .route('/v1/server/deployed')
    .post(server.createADeployment);

  // app
  //   .route('/server/deployed')
  //   .get(server.getAllDeployments);
};