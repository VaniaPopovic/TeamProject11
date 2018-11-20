var mongoose = require('mongoose');

var PuzzleSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
});

module.exports = mongoose.model('Puzzle', PuzzleSchema);