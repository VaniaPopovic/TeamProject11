var express = require("express");
var router = express.Router();
var WordFind = require("../models/WordFind");


router.get("/get", function(req, res) {
  //根据条件查找document,find则res为一个list，findOne则返回是一个对象
    WordFind.findOne({
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
  const mapData = new WordFind(
    {
      level: 2,
      difficulty: "EASY",
      answers: [
        "charles",
        "vanja",
        "iphone",
        "dog",
        "charge"
      ],
      grid: [
        [
          "0c000d00"
        ],
        [
          "0h0cio00"
        ],
        [
          "0a0hpg00"
        ],
        [
          "0r0ah00v"
        ],
        [
          "0g0ro00a"
        ],
        [
          "0e0ln00n"
        ],
        [
          "000ee00j"
        ],
        [
          "000s000a"
        ]
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
