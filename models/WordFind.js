var mongoose = require("mongoose");

var WordFindSchema = new mongoose.Schema({
    level: Number,
    difficulty: String,
    answers: [String],
    grid: [
      [String]
    ]
  

}, { collection: "wordFindMap" });

module.exports = mongoose.model("WordFind", WordFindSchema);
