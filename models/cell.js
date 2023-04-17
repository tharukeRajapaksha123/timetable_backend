const mongoose = require('mongoose');

// Create a schema for the table
const schema = new mongoose.Schema({
  cell: String,
  subject: String,
  teacher: String,
  date: String,
  classroom: String
});

// Create a model for the table
const Table = mongoose.model('Cell', schema);

module.exports  = Table