'use strict';

let mongoose  = require('mongoose'),
    Deploy    = mongoose.model('Deploys')

exports.createADeployment = (req, res) => {
  console.log(req.body);
  let throwErrors = []

  new Deploy(req.body).save((err, deploy) => {
    if (err) {
      console.log(err)
      var errors = err.errors
      for (var key in errors) {
        if (errors.hasOwnProperty(key)) {
          throwErrors.push(errors[key].message);
          console.log(errors[key].message);
        }
      }
      res.status(400).json({message: throwErrors});
    }
    console.log(deploy)
    res.status(201).json({deploy: deploy});
  });
};

exports.getAllDeployments = (req, res) => {
  Deploy.find({}, (err, deploys) => {
    res.status(200).json({deploys: deploys});  
  });
};