var mongoose = require("mongoose");

var ScrabbleSchema = new mongoose.Schema({
    level: Number,
    answers: [String],
    grid: [
        {
            id: Number,
            letter: String,
            x: Number,
            y: Number
          },
    ]
  

}, { collection: "ScrabbleMap" });

module.exports = mongoose.model("Scrabble", ScrabbleSchema);
