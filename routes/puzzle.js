var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Puzzle = require("../models/Puzzle.js");
var passport = require("passport");
var User = require("../models/User");
require("../config/passport")(passport);

/* GET ALL BOOKS */
// router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {
//     console.log(request.user);
//     res.json({"a":"aaa"});
//     //  Puzzle.find(function (err, books) {
//     //   if (err) return next(err); res.json(books);
//     // });
//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });
router.post(
  "/updateScrabbleScore",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        console.log(token);
        console.log(req.user.username);
        var obj = { 
          "level": req.body.level,
          "timeTaken": req.body.timeTaken,
          "isFinished":req.body.isFinished,
          "score":req.body.score };
        User.findOneAndUpdate(
          { username: req.user.username },
          { $set: { "scrabbleInfo.level" : req.body.level },$push: { "scrabbleInfo.completed": obj } },
          function(error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log(success);
            }
          }
        );
    }
  }
);

router.post(
  "/getScrabble",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      
  
        User.findOne(
          { username: req.user.username },
          function(error, obj) {
            if (error) {
              
              console.log(error);
            } else {
              var resp = {};
              resp.scrabbleInfo = obj.scrabbleInfo;
              resp.wordFindInfo = obj.wordFindInfo;
              resp.crossWordInfo = obj.crossWordInfo;
              res.json(resp);
            }
          }
        );
    }
  }
);
router.post(
  "/updateCrosswordScore",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        console.log(token);
        console.log(req.user.username);
        var obj = { 
          "level": req.body.level,
          "timeTaken": req.body.timeTaken,
          "isFinished":req.body.isFinished,
          "score": req.body.score 
        };
        User.findOneAndUpdate(
          { username: req.user.username },
          { $set: { "crosswordInfo.level" : req.body.level },$push: { "crosswordInfo.completed": obj } },
          function(error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log(success);
            }
          }
        );
    }
  }
);
router.post(
  "/updateWordFindScore",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        console.log(token);
        console.log(req.user.username);
        var obj = { 
          "level": req.body.level,
          "difficulty":req.body.difficulty,
          "timeTaken": req.body.timeTaken,
          "isFinished":req.body.isFinished,
          "score" : req.body.score 
        };
        User.findOneAndUpdate(
          { username: req.user.username },
          { $set: { "wordFindInfo.level" : req.body.level },$push: { "wordFindInfo.completed": obj } },
          function(error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log(success);
            }
          }
        );
    }
  }
);
/* SAVE BOOK */
router.post("/", passport.authenticate("jwt", { session: false }), function(
  req,
  res
) {
  var token = getToken(req.headers);
  if (token) {
    //console.log(token);
    //console.log(req.user);
    res.json({ username: req.user.username });
  } else {
    return res.status(403).send({ success: false, msg: "Unauthorized." });
  }
});

getToken = function(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
module.exports = router;
