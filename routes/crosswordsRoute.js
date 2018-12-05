var express = require("express");
var router = express.Router();
var Crosswords = require("../models/Crosswords");


router.get("/get", function(req, res) {
//根据条件查找document
  Crosswords.findOne({
    "level": req.query.level
  }, function(err, jobs) {
    //send 400 status code if record not found
    if (err) return res.status(400).send("record doesn't exists");
    // 打印从数据库得到的数据
    //console.log(jobs);
    //res.send(jobs);
    res.json(jobs);
  });

});
//POST route for updating data
router.post("/post", function(req, res, next) {

  const mapData = new Crosswords({
    level: 2,
    totalCorrect: 8,
    clues: {

      across: [
        {
          number: 1,
          clue: "When you go to sleep you will lie in __",
          answer: "bed"
        },
        {
          number: 2,
          clue: "A soft cover that keeps you warm or comfortable.",
          answer: "rug"
        }
      ],
      down: [
        {
          number: 1,
          clue: "Please lock the __ when you go outside.",
          answer: "door"
        }

      ]
    },
    grid: [
      {
        id: "A1",
        letter: null
      },
      {
        id: "A2",
        letter: null
      },
      {
        id: "A3",
        letter: null
      },
      {
        id: "A4",
        letter: null
      },
      {
        id: "A5",
        letter: null
      },
      {
        id: "A6",
        letter: null
      },
      {
        id: "A7",
        letter: null
      },
      {
        id: "A8",
        letter: null
      },
      {
        id: "B1",
        letter: null
      },
      {
        id: "B2",
        letter: null
      },
      {
        id: "B3",
        letter: null
      },
      {
        id: "B4",
        letter: null
      },
      {
        id: "B5",
        letter: null
      },
      {
        id: "B6",
        letter: null
      },
      {
        id: "B7",
        letter: null
      },
      {
        id: "B8",
        letter: null
      },
      {
        id: "C1",
        letter: null
      },
      {
        id: "C2",
        letter: null
      },
      {
        id: "C3",
        letter: "b",
        across: true,
        clue_across: 1,
        down: false,
        clue_down: null,
        number: 1
      },
      {
        id: "C4",
        letter: "e",
        across: true,
        clue_across: 1,
        down: false,
        clue_down: null
      },
      {
        id: "C5",
        letter: "d",
        across: true,
        clue_across: 1,
        down: true,
        clue_down: 1,
        number: 1
      },
      {
        id: "C6",
        letter: null
      },
      {
        id: "C7",
        letter: null
      },
      {
        id: "C8",
        letter: null
      },
      {
        id: "D1",
        letter: null
      },
      {
        id: "D2",
        letter: null
      },
      {
        id: "D3",
        letter: null
      },
      {
        id: "D4",
        letter: null
      },
      {
        id: "D5",
        letter: "o",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 1
      },
      {
        id: "D6",
        letter: null
      },
      {
        id: "D7",
        letter: null
      },
      {
        id: "D8",
        letter: null
      },
      {
        id: "E1",
        letter: null
      },
      {
        id: "E2",
        letter: null
      },
      {
        id: "E3",
        letter: null
      },
      {
        id: "E4",
        letter: null
      },
      {
        id: "E5",
        letter: "o",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 1
      },
      {
        id: "E6",
        letter: null
      },
      {
        id: "E7",
        letter: null
      },
      {
        id: "E8",
        letter: null
      },
      {
        id: "F1",
        letter: null
      },
      {
        id: "F2",
        letter: null
      },
      {
        id: "F3",
        letter: null
      },
      {
        id: "F4",
        letter: null
      },
      {
        id: "F5",
        letter: "r",
        across: true,
        clue_across: 2,
        down: true,
        clue_down: 1,
        number: 2
      },
      {
        id: "F6",
        letter: "u",
        across: true,
        clue_across: 2,
        down: false,
        clue_down: null
      },
      {
        id: "F7",
        letter: "g",
        across: true,
        clue_across: 2,
        down: false,
        clue_down: null
      },
      {
        id: "F8",
        letter: null
      },
      {
        id: "G1",
        letter: null
      },
      {
        id: "G2",
        letter: null
      },
      {
        id: "G3",
        letter: null
      },
      {
        id: "G4",
        letter: null
      },
      {
        id: "G5",
        letter: null
      },
      {
        id: "G6",
        letter: null
      },
      {
        id: "G7",
        letter: null
      },
      {
        id: "G8",
        letter: null
      },
      {
        id: "H1",
        letter: null
      },
      {
        id: "H2",
        letter: null
      },
      {
        id: "H3",
        letter: null
      },
      {
        id: "H4",
        letter: null
      },
      {
        id: "H5",
        letter: null
      },
      {
        id: "H6",
        letter: null
      },
      {
        id: "H7",
        letter: null
      },
      {
        id: "H8",
        letter: null
      }
    ]

  });

//把数据存入到数据库中
  mapData.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Map."
    });
  });

});


module.exports = router;
