import React, { Component } from "react";

// 	/**
// 	 * Iterate over the grid, placing chars from the char pool into empty
// 	 * spaces at random.
// 	 * @param grid
// 	 * @param charPool
// 	 * @return
// 	 */
// 	 placeCharsFromCharPool(grid,charPool)
// 	{
// 		var char_pool_index = RandomNumberGeneratorFactory.getRNG().nextInt(charPool.length - 1);
// 		var c = charPool[char_pool_index];
// 		for(var i = 0; i < grid.getYSize(); i++)
// 		{
// 			for(var j = 0; j < grid.getXSize(); j++)
// 			{
// 				var gc = new GridCoordinate(j,i);
// 				if(grid.getCharAt(gc) == Grid.BLANK_CHAR)
// 				{
// 					grid.setCharAt(gc, c);
// 					char_pool_index = RandomNumberGeneratorFactory.getRNG().nextInt(charPool.length - 1);
// 					c = charPool[char_pool_index];
// 				}
// 			}
// 		}
// 		return grid;
//   }

class PuzzleGenerator extends React.Component {
  constructor(props) {
    super();
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
    //grid = writeRandomChars(grid);
    return grid;
  }

  /**
   * Write the word bank to a blank grid.
   * @param grid
   * @return
   */
  writeWords(grid) {
    //console.log("word",this.difficulty);
    var words = ["hassan", "vanja", "dog", "cat ", "sexy"];

    for (let word of words) {
      grid = this.placeWord(word, grid);
    }
    return grid;
  }

  // 	/**
  // 	 * Write random "noise" characters to any grid coordinates which are blank.
  // 	 * The characters written depend on the difficulty of the puzzle.
  // 	 * @param grid
  // 	 * @return
  // 	 */
  //   writeRandomChars(grid)
  // 	{
  // 		var charPool = ALL_CHARS;
  // 		grid = placeCharsFromCharPool(grid, charPool);
  // 		return grid;
  // 	}
  // 	/**
  // 	 * Writes the word at a random location and direction on the grid.
  // 	 */
  placeWord(word, grid) {
    console.log("place", this.difficulty);
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
      console.log("YES");
      return { x: gc.x + 1, y: gc.y };
    } else if (direction == this.DIR_VERTICAL) {
      console.log("YES");
      return { x: gc.x, y: gc.y + 1 };
    } else if (direction == this.DIR_DIAG_UP) {
      console.log("no");
      return { x: gc.x + 1, y: gc.y - 1 };
    } else if (direction == this.DIR_DIAG_DOWN) {
      console.log("no");
      return { x: gc.x + 1, y: gc.y + 1 };
    } else if (direction == this.DIR_R_HORIZONTAL) {
      console.log("no");
      return { x: gc.x - 1, y: gc.y };
    } else if (direction == this.DIR_R_VERTICAL) {
      console.log("no");
      return { x: gc.x, y: gc.y - 1 };
    } else if (direction == this.DIR_R_DIAG_UP) {
      console.log("no");
      return { x: gc.x - 1, y: gc.y - 1 };
    } //  Reverse Diagonal Down
    else {
      console.log("no");
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
    if (this.difficulty == "EASY") {

	  index = Math.floor(Math.random() * this.EASY_DIRECTIONS.length) ;
	  console.log("INDEX", this.EASY_DIRECTIONS.length)
      console.log("efkolo!!!!!!!!!!!!!!!!!!!!!!!",this.EASY_DIRECTIONS[index]);
      return this.EASY_DIRECTIONS[index];
    } else if (this.difficulty == "MEDIUM") {
      console.log("MEDIO",this.NORMAL_DIRECTIONS[index]);
      index = Math.floor(Math.random() * this.NORMAL_DIRECTIONS.length);
      return this.NORMAL_DIRECTIONS[index];
    } else {
      console.log("KAPOU TA SKATEPSES RE MATE",this.HARD_DIRECTIONS[index]);
      index = Math.floor(Math.random() * this.HARD_DIRECTIONS.length);
      return this.HARD_DIRECTIONS[index];
    }
  }

  render() {
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
    obj.grid = gridJson;
    obj.difficulty = this.difficulty;
    obj.answers = ["hassan", "vanja", "dog", "cat ", "sexy"];
    var jsonString = JSON.stringify(obj);
    console.log("GRID", jsonString);
    return <div>HELLO</div>;
  }
}

export default PuzzleGenerator;
