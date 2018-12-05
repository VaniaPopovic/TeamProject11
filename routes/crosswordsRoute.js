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
    level: 10,
    totalCorrect: 28,
    clues: {

      across: [
        {
          number: 1,
          clue: "Monday,Tuesday,Wednesday.....",
          answer: "days"
        },
        {
          number: 2,
          clue: "The nationality of a person from Ireland.",
          answer: "irish"
        },
        {
          number: 3,
          clue: "Twinkling night sky object.",
          answer: "star"
        },
        {
          number: 4,
          clue: "A round object from chicken,used for food.",
          answer: "egg"
        }
      ],
      down: [
        {
          number: 5,
          clue: "A wide way leading from one place to another.",
          answer: "road"
        },
        {
          number: 6,
          clue: "In the middle of.",
          answer: "among"
        },
        {
          number: 7,
          clue: "A polite way to address an adult man.",
          answer: "sir"
        },
        {
          number: 8,
          clue: "The part between your hand and your arm.",
          answer: "wrist"
        },
        {
          number: 9,
          clue: "A boy is he, a girl is __.",
          answer: "she"
        }
      ]
    },
    grid: [
      {
        id: "A1",
        letter: "r",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 5,
        number: 5
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
        id: "A9",
        letter: null
      },
      {
        id: "A10",
        letter: null
      },
      {
        id: "B1",
        letter: "o",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 5
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
        id: "B9",
        letter: null
      },
      {
        id: "B10",
        letter: null
      },
      {
        id: "C1",
        letter: "a",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 5

      },
      {
        id: "C2",
        letter: null
      },
      {
        id: "C3",
        letter: null
      },
      {
        id: "C4",
        letter: null
      },
      {
        id: "C5",
        letter: null
      },
      {
        id: "C6",
        letter: "w",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 8,
        number: 8
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
        id: "C9",
        letter: null
      },
      {
        id: "C10",
        letter: null
      },
      {
        id: "D1",
        letter: "d",
        across: true,
        clue_across: 1,
        down: true,
        clue_down: 5,
        number: 1
      },
      {
        id: "D2",
        letter: "a",
        across: true,
        clue_across: 1,
        down: false,
        clue_down: null
      },
      {
        id: "D3",
        letter: "y",
        across: true,
        clue_across: 1,
        down: false,
        clue_down: null
      },
      {
        id: "D4",
        letter: "s",
        across: true,
        clue_across: 1,
        down: true,
        clue_down: 7,
        number: 7
      },
      {
        id: "D5",
        letter: null
      },
      {
        id: "D6",
        letter: "r",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 8
      },
      {
        id: "D7",
        letter: null
      },
      {
        id: "D8",
        letter: "s",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 9,
        number: 9
      },
      {
        id: "D9",
        letter: null
      },
      {
        id: "D10",
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
        letter: "i",
        across: true,
        clue_across: 2,
        down: true,
        clue_down: 7,
        number: 2
      },
      {
        id: "E5",
        letter: "r",
        across: true,
        clue_across: 2,
        down: false,
        clue_down: null
      },
      {
        id: "E6",
        letter: "i",
        across: true,
        clue_across: 2,
        down: true,
        clue_down: 8
      },
      {
        id: "E7",
        letter: "s",
        across: true,
        clue_across: 2,
        down: false,
        clue_down: null
      },
      {
        id: "E8",
        letter: "h",
        across: true,
        clue_across: 2,
        down: true,
        clue_down: 9
      },
      {
        id: "E9",
        letter: null
      },
      {
        id: "E10",
        letter: null
      },
      {
        id: "F1",
        letter: "s",
        across: true,
        clue_across: 3,
        down: false,
        clue_down: null,
        number: 3
      },
      {
        id: "F2",
        letter: "t",
        across: true,
        clue_across: 3,
        down: false,
        clue_down: null
      },
      {
        id: "F3",
        letter: "a",
        across: true,
        clue_across: 3,
        down: true,
        clue_down: 6,
        number: 6
      },
      {
        id: "F4",
        letter: "r",
        across: true,
        clue_across: 3,
        down: true,
        clue_down: 7
      },
      {
        id: "F5",
        letter: null
      },
      {
        id: "F6",
        letter: "s",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 8
      },
      {
        id: "F7",
        letter: null
      },
      {
        id: "F8",
        letter: "e",
        across: true,
        clue_across: 4,
        down: true,
        clue_down: 9,
        number: 4
      },
      {
        id: "F9",
        letter: "g",
        across: true,
        clue_across: 4,
        down: false,
        clue_down: null
      },
      {
        id: "F10",
        letter: "g",
        across: true,
        clue_across: 4,
        down: false,
        clue_down: null
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
        letter: "m",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 6
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
        letter: "t",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 8
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
        id: "G9",
        letter: null
      },
      {
        id: "G10",
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
        letter: "o",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 6
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
      },
      {
        id: "H9",
        letter: null
      },
      {
        id: "H10",
        letter: null
      },
      {
        id: "I1",
        letter: null
      },
      {
        id: "I2",
        letter: null
      },
      {
        id: "I3",
        letter: "n",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 6
      },
      {
        id: "I4",
        letter: null
      },
      {
        id: "I5",
        letter: null
      },
      {
        id: "I6",
        letter: null
      },
      {
        id: "I7",
        letter: null
      },
      {
        id: "I8",
        letter: null
      },
      {
        id: "I9",
        letter: null
      },
      {
        id: "I10",
        letter: null
      },
      {
        id: "J1",
        letter: null
      },
      {
        id: "J2",
        letter: null
      },
      {
        id: "J3",
        letter: "g",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 6
      },
      {
        id: "J4",
        letter: null
      },
      {
        id: "J5",
        letter: null
      },
      {
        id: "J6",
        letter: null
      },
      {
        id: "J7",
        letter: null
      },
      {
        id: "J8",
        letter: null
      },
      {
        id: "J9",
        letter: null
      },
      {
        id: "J10",
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
