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
      return res.status(400).json({message: throwErrors})
    }
    console.log(deploy)
    return res.status(201).json({deploy: deploy})
  })
}

exports.getAllDeployments = (req, res) => {
  Deploy.find({}).sort({created_at: 'descending'}).exec((err, deploys) => {
    res.status(200).json({deploys: deploys})
  })
}
