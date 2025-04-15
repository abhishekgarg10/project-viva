const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'], 
    minlength: [3, 'Title must be at least 3 characters long'], 
  },
  priority: {
    type: String,
    required: [true, 'Priority is required'], 
    enum: {
      values: ['Low', 'Medium', 'High'], 
      message: '{VALUE} is not a valid priority', 
    },
  },
  description: {
    type: String,
    required: [true, 'Description is required'], 
    maxlength: [500, 'Description cannot be more than 500 characters'], 
  },
});

module.exports = mongoose.model('Bug', bugSchema);

