'use strict';
let mongoose         = require('mongoose'),
    Schema           = mongoose.Schema;

let deploySchema = new Schema({
  branch: {
    type: String,
    required: [true, 'Branch cannot be blank.']
  },
  sha: {
    type: String,
    required: [true, 'Sha cannot be blank.']
  },
  user: {
    type: String,
    required: [true, 'User cannot be blank.']
  },
  commitDetails: {
    type: String,
    required: [true, 'Commit Details cannot be blank.']
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Deploys', deploySchema);