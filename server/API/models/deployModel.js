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
  commiterEmail: {
    type: String,
    required: [true, 'Commiter Email cannot be blank.']
  },
  commiterName: {
    type: String,
    required: [true, 'Commiter Name cannot be blank.']
  },
  subject: {
    type: String,
    required: [true, 'Subject cannot be blank.']
  },
  deployType: {
    type: String,
    required: [true, 'Deploy Type cannot be blank.']
  },
  authorUnixTimestamp: {
    type: String,
    required: [true, 'Author Commit Time cannot be blank.']
  },
  commiterUnixTimestamp: {
    type: String,
    required: [true, 'Commiter Commit Time cannot be blank.']
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Deploys', deploySchema)
