var express = require("express");
var router = express.Router();
var Scrabble = require("../models/Scrabble");

router.get("/get", function(req, res) {
  //根据条件查找document,find则res为一个list，findOne则返回是一个对象
  Scrabble.findOne(
    {
      level: req.query.level
    },
    function(err, jobs) {
      //send 400 status code if record not found
      if (err) return res.status(400).send("record doesn't exists");
      // 打印从数据库得到的数据
      //console.log(jobs);
      //res.send(jobs);
      res.json(jobs);
    }
  );
});
//POST route for updating data
router.post("/post", function(req, res, next) {
  //level 10
  const mapData = new Scrabble({
    level: 10,
    answers: [
      "expired",
      "expire",
      "pride",
      "deep",
      "deer",
      "dire",
      "drip",
      "peer",
      "pier",
      "ride",
      "ripe",
      "reed",
      "die",
      "dip",
      "pie",
      "red",
      "rid",
      "rip"
    ],
    grid: [
      {
        id: 1,
        letter: "E",
        x: 1,
        y: 6
      },
      {
        id: 2,
        letter: "E",
        x: 2,
        y: 6
      },
      {
        id: 3,
        letter: "X",
        x: 3,
        y: 6
      },
      {
        id: 4,
        letter: "D",
        x: 4,
        y: 6
      },
      {
        id: 5,
        letter: "I",
        x: 5,
        y: 6
      },
      {
        id: 6,
        letter: "P",
        x: 6,
        y: 6
      },
      {
        id: 7,
        letter: "R",
        x: 7,
        y: 6
      }
    ]
  });

  //把数据存入到数据库中
  mapData
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Map."
      });
    });
});

module.exports = router;
