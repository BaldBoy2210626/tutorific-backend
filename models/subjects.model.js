'use strict';

const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  name: {
    type: String,
    enum: ['Math', 'Physics', 'Chemistry', 'Biology', 'English',
      'Spanish', 'French', 'German', 'History', 'Politics',
      'Philosophy', 'Economics', 'Physical Education'],
    required: 'Subject must have a name!'
  },
  grade: {
    type: Number,
    min: 1,
    max: 13,
    required: 'Subject must have a grade!'
  }
}, {
  _id: false
});