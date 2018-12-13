var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  wordFindInfo: {
    level: Number,
    completed: [{
      level: Number,
      difficulty: String,
      timeTaken : String,
      isFinished: Boolean,
      score: Number
    }]
  },
  crosswordInfo: {
    level: Number,
    completed: [{
      level: Number,
      timeTaken : String,
      isFinished: Boolean,
      score : Number
    }]
  },
  scrabbleInfo: {
    level: Number,
    completed: [{
      level: Number,
      timeTaken : String,
      isFinished: Boolean,
      score: Number
    }]
  }

});

UserSchema.pre("save", function(next) {
  var user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
