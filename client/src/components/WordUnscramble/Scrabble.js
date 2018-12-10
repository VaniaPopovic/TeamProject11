import "./array_helpers";

import React, { Component } from "react";
import classNames from "classnames";
import HTML5Backend from "react-dnd-html5-backend";
import { DragSource, DropTarget, DragDropContext } from "react-dnd";

import FlipMove from "react-flip-move";
import tiless from "./tiles.json";
import PropTypes from "prop-types";
import axios from "axios";
import {
  Fade,
  Alert,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button
} from "reactstrap";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

const BOARD_WIDTH = 11;
const BOARD_HEIGHT = 7;
const SQUARE_SIZE = 56;
const TILE_OFFSET = 3;
//const NUM_SQUARES   = BOARD_WIDTH * BOARD_HEIGHT;

@DragDropContext(HTML5Backend)
class Scrabble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameIndex:0,
      tiles: [],
      score: 0,
      answers: [],
      foundWords: [],
      fadeIn: false,
      info: true
    };

    this.updateDroppedTilePosition = this.updateDroppedTilePosition.bind(this);
    this.resetTiles = this.resetTiles.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  componentDidMount(){
    console.log("mounting");
    this.getMapFromServer(this.state.gameIndex);
  }
  //get map from database
  getMapFromServer(lvl) {
    axios
      .get("/api/Scrabble/get",{
        params: {
          level: lvl
        }
      })
      .then(response => {
        //print  console() you can not add "string" in console ,just print it alone
        console.log("RESPONSE",response);
        this.setState({tiles:response.data.grid,
                  answers: response.data.answers  });
      })
      .catch(error => {
        console.log(error);
      });
  }
  toggleInfo() {
    this.setState({
      info: !this.state.info
    });
  }
  updateDroppedTilePosition({ x, y }, tile) {
    // Normally, this would be done through a Redux action, but because this
    // is such a contrived example, I'm just passing the action down through
    // the child.

    // Create a copy of the state, find the newly-dropped tile.
    let stateTiles = this.state.tiles.slice();
    const index = stateTiles.findIndex(stateTile => stateTile.id === tile.id);

    // Set it to a new copy of the tile, but with the new coords
    stateTiles[index] = { ...tile, x, y };

    this.setState({ tiles: stateTiles });
    this.checkForWords();
  }

  resetTiles() {
    this.setState({ tiles: tiless.grid });
  }

  renderTiles() {
    return this.state.tiles.map((tile, index) => {
      return (
        <Tile key={index} onDrop={this.updateDroppedTilePosition} {...tile} />
      );
    });
  }

  renderBoardSquares() {
    // Create a 2D array to represent the board
    // Array#matrix is a monkeypatched, custom method >:)
    const matrix = Array.matrix(BOARD_WIDTH, BOARD_HEIGHT);

    return matrix.map((row, rowIndex) =>
      row.map(index => {
        return (
          <BoardSquare
            key ={Math.random()*10}
            x={index}
            y={rowIndex}
            onDrop={this.updateDroppedTilePosition}
          />
        );
      })
    );
  }
  checkForWords = () => {
    let capturedTiles = [];
    let tiles = this.state.tiles;
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].y === 3) {
        capturedTiles.push(tiles[i]);
      }
    }
    let result = "";

    // sort by x position in matrix
    capturedTiles.sort((a, b) => {
      return a.x > b.x ? 1 : b.x > a.x ? -1 : 0;
    });

    let containsALetter = function(element, index) {
      return element.x === index + 1;
    };

    for (let j = 0; j < 8; j++) {
      if (!capturedTiles.some(el => containsALetter(el, j))) {
        capturedTiles.splice(j, 0, " ");
      }
    }

    for (let j = 0; j < capturedTiles.length; j++) {
      if (capturedTiles[j].letter) {
        result += capturedTiles[j].letter.toLowerCase();
      } else {
        result += " ";
      }
    }

    this.validateWord(result.trim());
  };
  validateWord = word => {
    let result = false;

    for (var i = 0; i < this.state.answers.length; i++) {
      if (word == this.state.answers[i]) {
        //if word not already found
        if(!this.state.foundWords.includes(word)){
        let found = this.state.foundWords;
        found.push(word);
        result = true;
        console.log("FOUND IT");
        var sc = this.state.score + 10;
        this.setState({ score: sc, fadeIn: !this.state.fadeIn,foundWords: found });

        setTimeout(() => {
          this.setState({
            fadeIn: !this.state.fadeIn,
            
          });
        }, 2000);
        this.isGameDone();
      }
      }
    }
  };
  isGameDone() {
    console.log("ans", this.state.answers);
    console.log("found",this.state.foundWords);
    // Check if we've found all targets.
    if(this.state.answers.sort().join(',')=== this.state.foundWords.sort().join(',')){
      console.log("YUS",);
      //var finish = new Date().getTime();
    //var t = finish -this.state.time;
    this.state.foundWords.length =0;
     this.setState({gameIndex: this.state.gameIndex+1,
                    answers:[],
                    //foundWords:f,
                    tiles:[],
                    score:0,
                    fadeIn:false,
    }, () => {
      console.log(this.state.gameIndex);
      this.getMapFromServer(this.state.gameIndex);
    });
       //elapsedTime: t,
    //                   warning: true,  
    //                               })
    // setTimeout(function() {
    //   this.getMapFromServer(this.state.puzzleIndex +1)
    // }.bind(this), 2500);
   // this.componentDidMount();
  }
  else console.log("NAH");
      //else alert('not a match');
    
  }
  render() {
    return (
      <div>
        <h1>LEVEL {this.state.gameIndex}</h1>
        <h4> {this.state.answers.length} WORD COMBINATIONS</h4>
        <h4>Score: {this.state.score}</h4>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
          <Alert color="success">Correct!</Alert>
        </Fade>
        <div id="scrabble">
          <div className="board-border">
            <div className="board">
              <FlipMove duration={1500} staggerDelayBy={150}>
                {this.renderTiles()}
              </FlipMove>
              {this.renderBoardSquares()}
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.info}
          toggle={this.toggleInfo}
          className={"modal-info " + this.props.className}
        >
          <ModalHeader toggle={this.toggleInfo}>
            Welcome to Scrabble
          </ModalHeader>
          <ModalBody>
            Your aim is to find as many words by connecting the tiles available.{" "}
            <br />
            There are 10 levels with different amount of words to be found in
            each level.<br />
            To get points of the word you need to drag the tiles and connect
            them in the fuscia box!<br />
            For each level you get a time limit depending on the difficulty!
            <br />
            Good luck!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleInfo}>
              I am ready!
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const tileSource = {
  beginDrag(props) {
    return props;
  }
};

const tileTarget = {
  drop(props, monitor) {
    const tile1 = props;
    const tile2 = monitor.getItem();

    props.onDrop(tile1, tile2);
    props.onDrop(tile2, tile1);
  }
};

@DropTarget("tile", tileTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))
@DragSource("tile", tileSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
class Tile extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    letter: PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const {
      connectDropTarget,
      connectDragSource,
      isDragging,
      letter,
      x,
      y
    } = this.props;

    const styles = {
      left: x * SQUARE_SIZE - TILE_OFFSET,
      top: y * SQUARE_SIZE - TILE_OFFSET,
      zIndex: `${x + 1}${y + 1}`,
      opacity: isDragging ? 0.5 : 1
    };

    return connectDropTarget(
      connectDragSource(
        <div className="tile" style={styles}>
          <span className="tile-letter">{letter}</span>
        </div>
      )
    );
  }
}

const squareTarget = {
  drop(props, monitor) {
    props.onDrop(props, monitor.getItem());
  }
};

@DropTarget("tile", squareTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))
class BoardSquare extends Component {
  renderSquare() {
    const classes = classNames({
      "board-square": true,
      "dragged-over": this.props.isOver
    });

    return <div className={classes} />;
  }
  render() {
    if (this.props.tile) {
      // If this square already has a tile in it, we don't want to allow drops.
      return this.renderSquare();
    } else {
      return this.props.connectDropTarget(this.renderSquare());
    }
  }
}

export default Scrabble;
