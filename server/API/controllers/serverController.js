'use strict';

exports.createADeployment = function(req, res) {
  console.log(req.body);
  res.status(201).json({message: "hello"})
};