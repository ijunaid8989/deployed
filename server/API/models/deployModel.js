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
  authorEmail: {
    type: String,
    required: [true, 'Author Email cannot be blank.']
  },
  authorName: {
    type: String,
    required: [true, 'Author Name cannot be blank.']
  },
  subject: {
    type: Date,
    required: [true, 'Subject cannot be blank.']
  },
  unix_timestamp: {
    type: String,
    required: [true, 'Commit Time cannot be blank.']
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Deploys', deploySchema)
