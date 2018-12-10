var express = require("express");
var router = express.Router();
var Scrabble = require("../models/Scrabble");


router.get("/get", function(req, res) {
  //根据条件查找document,find则res为一个list，findOne则返回是一个对象
    Scrabble.findOne({
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
  const mapData = new Scrabble(
    {
      level: 0,
      answers: [
        "cat",
        "tap",
        "at",
        "act",
        "pact"
      ],
      grid: [
        {
            "id":1,
            "letter":"C",
            "x":3,
            "y":6
         },
         {
            "id":2,
            "letter":"T",
            "x":4,
            "y":6
         },
         {
            "id":3,
            "letter":"A",
            "x":5,
            "y":6
         },
         {
            "id":4,
            "letter":"P",
            "x":6,
            "y":6
         }
        ]

    }
    
  );

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
