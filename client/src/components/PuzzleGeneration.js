import React, { Component } from "react";
import { Col, Card, CardHeader, CardBody, Input, CardFooter } from "reactstrap";
import BoxGrid from "./BoxGrid";

class PuzzleGeneration extends React.Component {
  constructor(props) {
    super();
    this.state = { squares: [] };
    this.DIR_HORIZONTAL = 0;
    this.DIR_VERTICAL = 1;
    this.DIR_DIAG_UP = 2;
    this.DIR_DIAG_DOWN = 3;
    this.DIR_R_HORIZONTAL = 4;
    this.DIR_R_VERTICAL = 5;
    this.DIR_R_DIAG_UP = 6;
    this.DIR_R_DIAG_DOWN = 7;
    this.difficulty = "EASY";
    this.rows = 8;
    this.columns = 8;
    this.EASY_DIRECTIONS = [this.DIR_HORIZONTAL, this.DIR_VERTICAL];
    this.NORMAL_DIRECTIONS = [
      this.DIR_HORIZONTAL,
      this.DIR_VERTICAL,
      this.DIR_DIAG_UP,
      this.DIR_DIAG_DOWN
    ];
    this.HARD_DIRECTIONS = [
      this.DIR_HORIZONTAL,
      this.DIR_VERTICAL,
      this.DIR_DIAG_UP,
      this.DIR_DIAG_DOWN,
      this.DIR_R_HORIZONTAL,
      this.DIR_R_VERTICAL,
      this.DIR_R_DIAG_UP,
      this.DIR_R_DIAG_DOWN
    ];

    this.ALL_CHARS = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
  }
  matrix(rows, cols, defaultValue) {
    var arr = [];
    console.log("matr", this.difficulty);
    // Creates all lines:
    for (var i = 0; i < rows; i++) {
      // Creates an empty line
      arr.push([]);

      // Adds cols to the empty line:
      arr[i].push(new Array(cols));

      for (var j = 0; j < cols; j++) {
        // Initializes:
        arr[i][j] = defaultValue;
      }
    }

    return arr;
  }

  generate() {
    //console.log("egen",this.difficulty);
    var grid = this.matrix(this.rows, this.columns, "0");
    grid = this.writeWords(grid);
    //  Write answer key here
    grid = this.writeRandomChars(grid);
    return grid;
  }

  /**
   * Write the word bank to a blank grid.
   * @param grid
   * @return
   */
  writeWords(grid) {
    //console.log("word",this.difficulty);
    var words = this.props.answers;

    for (let word of words) {
      grid = this.placeWord(word, grid);
    }
    return grid;
  }

  writeRandomChars(grid) {
    var charPool = this.ALL_CHARS;
    if(this.props.difficulty == "EASY"){
      for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
          if (grid[i][j] == "0") {
            grid[i][j] = "a";
          }
        }
      }
    }
    else if(this.props.difficulty =="NORMAL"){
      for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
          if (grid[i][j] == "0") {
            grid[i][j] = charPool[Math.floor(Math.random() * 24)];
          }
        }
      }
    }
   
    return grid;
  }

  placeCharsFromCharPool(grid, charPool) {
    var char_pool_index = Math.floor(Math.random() * 24);
    var c = charPool[char_pool_index];
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.colums; j++) {
        //var gc = new GridCoordinate(j,i);
        if (grid[i][j] == "0") {
          grid[i][j] = c;
          char_pool_index =
          Math.floor(Math.random() * 24);
          c = charPool[char_pool_index];
        }
      }
    }
    return grid;
  }

  /**
   * Writes the word at a random location and direction on the grid.
   */
  placeWord(word, grid) {
    console.log("place", this.props.difficulty);
    var isValidPlacement = false; // Is the word able to be placed at this direction & starting position?
    var direction = 0;
    var startingPosition = { x: 0, y: 0 };

    while (!isValidPlacement) {
      direction = this.generateRandomDirection();
      startingPosition = {
        x: Math.floor(Math.random() * this.rows),
        y: Math.floor(Math.random() * this.columns)
      };
      isValidPlacement = this.willWordPrint(
        startingPosition,
        direction,
        word,
        grid
      );
    }
    var result = this.printWord(startingPosition, direction, word, grid);
    return result;
  }
  willWordPrint(start, direction, word, grid) {
    if (!this.checkLength(start, direction, word.length, grid)) {
      return false;
    } else if (!this.checkCollisions(start, direction, word, grid)) {
      return false;
    }
    return true;
  }

  printWord(currentPos, direction, word, grid) {
    for (var i = 0; i < word.length; i++) {
      var c = word.charAt(i);
      grid[currentPos.x][currentPos.y] = c;
      currentPos = this.move(currentPos, direction);
    }
    return grid;
  }
  move(gc, direction) {
    console.log("PREPEI NAN 0 JE 1", direction);
    if (direction == this.DIR_HORIZONTAL) {
      return { x: gc.x + 1, y: gc.y };
    } else if (direction == this.DIR_VERTICAL) {
      return { x: gc.x, y: gc.y + 1 };
    } else if (direction == this.DIR_DIAG_UP) {
      return { x: gc.x + 1, y: gc.y - 1 };
    } else if (direction == this.DIR_DIAG_DOWN) {
      return { x: gc.x + 1, y: gc.y + 1 };
    } else if (direction == this.DIR_R_HORIZONTAL) {
      return { x: gc.x - 1, y: gc.y };
    } else if (direction == this.DIR_R_VERTICAL) {
      return { x: gc.x, y: gc.y - 1 };
    } else if (direction == this.DIR_R_DIAG_UP) {
      return { x: gc.x - 1, y: gc.y - 1 };
    } //  Reverse Diagonal Down
    else {
      return { x: gc.x - 1, y: gc.y + 1 };
    }
  }

  /**
   * Check to ensure that the word will fit on the grid given the direction
   * and starting point.
   * @return True if word fits, false otherwise
   */
  checkLength(currentPos, direction, length) {
    for (var i = 0; i < length; i++) {
      var x = currentPos.x;
      var y = currentPos.y;
      if (x >= this.rows || y >= this.columns || x < 0 || y < 0) {
        return false;
      }
      currentPos = this.move(currentPos, direction);
    }
    return true;
  }
  /**
   * Check to ensure that the the word won't overwrite other words already on the grid given the
   * diraction and starting point.
   * and starting point.
   * @return True if word fits, false otherwise
   */
  checkCollisions(currentPos, direction, word, grid) {
    for (var i = 0; i < word.length; i++) {
      var word_char = word.charAt(i);
      console.log(currentPos.x, currentPos.y, " CURR POSS");
      var grid_char = grid[currentPos.x][currentPos.y];
      //  The spot we are printing should either be blank or have the same character (overlapping words)
      if (grid_char == "0" || grid_char == word_char) {
        currentPos = this.move(currentPos, direction);
      } else {
        return false;
      }
    }
    return true;
  }
  // 	/**
  // 	 * Generates a direction at random, depending on the difficulty the user has selected.
  // 	 * @return
  // 	 */
  generateRandomDirection() {
    console.log(this.EASY_DIRECTIONS, "kotsiro");

    var index;
    if (this.props.difficulty == "EASY") {
      index = Math.floor(Math.random() * this.EASY_DIRECTIONS.length);
      console.log("INDEX", this.EASY_DIRECTIONS.length);
      console.log("efkolo!!!!!!!!!!!!!!!!!!!!!!!", this.EASY_DIRECTIONS[index]);
      return this.EASY_DIRECTIONS[index];
    } else if (this.props.difficulty == "MEDIUM") {
      console.log("MEDIO", this.NORMAL_DIRECTIONS[index]);
      index = Math.floor(Math.random() * this.NORMAL_DIRECTIONS.length);
      return this.NORMAL_DIRECTIONS[index];
    } else {
      console.log("KAPOU TA SKATEPSES RE MATE", this.HARD_DIRECTIONS[index]);
      index = Math.floor(Math.random() * this.HARD_DIRECTIONS.length);
      return this.HARD_DIRECTIONS[index];
    }
  }

  render() {
    var gr = "";
    var sq = [];
    if (this.props.answers) {
      var gr = this.generate();
      var gridJson = [];
      console.log(gr);
      for (var i = 0; i < this.rows; i++) {
        var str = "";
        for (var j = 0; j < this.columns; j++) {
          str = str + gr[i][j];
          //console.log(gr[i][j])
        }
        gridJson.push([str]);
      }
      var obj = {};

      obj.level = this.props.level;
      obj.answers = this.props.answers;
      obj.difficulty = this.props.difficulty;
      obj.grid = gridJson;
      var jsonString = JSON.stringify(obj);
      console.log("GRID", jsonString);
      gr = jsonString;
      sq = [];
      for (var r = 0; r < gridJson.length; r++) {
        sq.push([]);
        for (var c = 0; c < gridJson[r].length; c++) {
          var str = gridJson[r][c].split("");
          for (var g = 0; g < str.length; g++) {
            sq[r].push({
              value: str[g],
              revealed: false
            });
          }
        }
      }
    }

    return (
      <div>
        <p>{gr}</p>
        <BoxGrid squares={sq} />
      </div>
    );
  }
}

export default PuzzleGeneration;
