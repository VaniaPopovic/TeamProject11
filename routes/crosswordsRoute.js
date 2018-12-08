var express = require("express");
var router = express.Router();
var Crosswords = require("../models/Crosswords");


router.get("/get", function(req, res) {
//根据条件查找document,find则res为一个list，findOne则返回是一个对象
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

//level 9
  const mapData = new Crosswords({
    level: 9,
    totalCorrect: 24,
    clues: {

      across: [
        {
          number: 1,
          clue: "We get milk from this animal.",
          answer: "cow"
        },
        {
          number: 2,
          clue: "Cat's feet.",
          answer: "paws"
        },
        {
          number: 3,
          clue: "You might find this little jumping pest on your dog.",
          answer: "flea"
        },
        {
          number: 4,
          clue: "An insect produces wax and honey.",
          answer: "bee"
        }
      ],
      down: [
        {
          number: 1,
          clue: "Baby lions or bears.",
          answer: "cubs"
        },
        {
          number: 4,
          clue: "Use the teeth to cut.",
          answer: "bite"
        },
        {
          number: 5,
          clue: "A large wild dog.",
          answer: "wolf"
        },
        {
          number: 6,
          clue: "Huge ocean-going mammal.",
          answer: "whale"
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
        letter: "c",
        across: true,
        clue_across: 1,
        down: true,
        clue_down: 1,
        number: 1
      },
      {
        id: "A5",
        letter: "o",
        across: true,
        clue_across: 1,
        down: false,
        clue_down: null
      },
      {
        id: "A6",
        letter: "w",
        across: true,
        clue_across: 1,
        down: true,
        clue_down: 5,
        number: 5
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
        letter: "u",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 1
      },
      {
        id: "B5",
        letter: null
      },
      {
        id: "B6",
        letter: "o",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 5
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
        letter: "w",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 6,
        number: 6
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
        letter: null
      },
      {
        id: "C4",
        letter: "b",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 1
      },
      {
        id: "C5",
        letter: null
      },
      {
        id: "C6",
        letter: "l",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 5
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
        letter: "h",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 6
      },
      {
        id: "D1",
        letter: "p",
        across: true,
        clue_across: 2,
        down: false,
        clue_down: null,
        number: 2
      },
      {
        id: "D2",
        letter: "a",
        across: true,
        clue_across: 2,
        down: false,
        clue_down: null
      },
      {
        id: "D3",
        letter: "w",
        across: true,
        clue_across: 2,
        down: false,
        clue_down: null
      },
      {
        id: "D4",
        letter: "s",
        across: true,
        clue_across: 2,
        down: true,
        clue_down: 1
      },
      {
        id: "D5",
        letter: null
      },
      {
        id: "D6",
        letter: "f",
        across: true,
        clue_across: 3,
        down: true,
        clue_down: 5,
        number: 3
      },
      {
        id: "D7",
        letter: "l",
        across: true,
        clue_across: 3,
        down: false,
        clue_down: null
      },
      {
        id: "D8",
        letter: "e",
        across: true,
        clue_across: 3,
        down: false,
        clue_down: null
      },
      {
        id: "D9",
        letter: "a",
        across: true,
        clue_across: 3,
        down: true,
        clue_down: 6
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
        letter: null
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
        id: "E9",
        letter: "l",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 6
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
        letter: null
      },
      {
        id: "F6",
        letter: null
      },
      {
        id: "F7",
        letter: "b",
        across: true,
        clue_across: 4,
        down: true,
        clue_down: 4,
        number: 4
      },
      {
        id: "F8",
        letter: "e",
        across: true,
        clue_across: 4,
        down: false,
        clue_down: null
      },
      {
        id: "F9",
        letter: "e",
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
        letter: "i",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 4
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
        letter: "t",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 4
      },
      {
        id: "H8",
        letter: null
      },
      {
        id: "H9",
        letter: null
      }, {
        id: "I1",
        letter: null
      },
      {
        id: "I2",
        letter: null
      },
      {
        id: "I3",
        letter: null
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
        letter: "e",
        across: false,
        clue_across: null,
        down: true,
        clue_down: 4
      },
      {
        id: "I8",
        letter: null
      },
      {
        id: "I9",
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
