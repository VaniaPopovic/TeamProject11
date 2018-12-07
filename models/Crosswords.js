var mongoose = require('mongoose');

var CrosswordSchema = new mongoose.Schema({
  level: Number,
  totalCorrect: Number,
  clues: {
    across: [
      {
        number: Number,
        clue: String,
        answer: String
      }
    ],
    down: [
      {
        number: Number,
        clue: String,
        answer: String
      },

    ]
  },
  grid: [
    {
      id: String,
      letter: String,
      across: Boolean,
      clue_across: Number,
      down: Boolean,
      clue_down: Number,
      number: Number
    },

  ]

}, { collection: 'crosswordsMap' });

module.exports = mongoose.model('Crosswords', CrosswordSchema);
