import './array_helpers';

import React, { Component }  from 'react';
import moment                           from 'moment';
import { times }                        from 'lodash';
import classNames                       from 'classnames';
import HTML5Backend                     from 'react-dnd-html5-backend';
import {
  DragSource,
  DropTarget,
  DragDropContext
}                                       from 'react-dnd';

import FlipMove from 'react-flip-move';
import tiles from './tiles.js';
import PropTypes from 'prop-types';
import { Fade, Alert, Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';


const BOARD_WIDTH   = 11;
const BOARD_HEIGHT  = 7;
const SQUARE_SIZE   = 56;
const TILE_OFFSET   = 3;
//const NUM_SQUARES   = BOARD_WIDTH * BOARD_HEIGHT;

@DragDropContext(HTML5Backend)
class Scrabble extends Component {
  constructor(props) {
    super(props);
    var answ = ["cat","tap","cap","at","act"];
    this.state = 
    { tiles,
      score: 0,
      answers: answ,
      fadeIn: false,
      info: true,
     }

    this.updateDroppedTilePosition = this.updateDroppedTilePosition.bind(this);
    this.resetTiles = this.resetTiles.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }
  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }
  updateDroppedTilePosition({x, y}, tile) {
    // Normally, this would be done through a Redux action, but because this
    // is such a contrived example, I'm just passing the action down through
    // the child.

    // Create a copy of the state, find the newly-dropped tile.
    let stateTiles = this.state.tiles.slice();
    const index = stateTiles.findIndex( stateTile => stateTile.id === tile.id );

    // Set it to a new copy of the tile, but with the new coords
    stateTiles[index] = { ...tile, x, y };

    this.setState({ tiles: stateTiles });
    this.checkForWords();
  }

  resetTiles() {
    this.setState({ tiles });
  }

  renderTiles() {
    return this.state.tiles.map( (tile, index) => {
      return (
        <Tile
          key={index}
          onDrop={this.updateDroppedTilePosition}
          {...tile}
        />
      );
    });
  }

  renderBoardSquares() {
    // Create a 2D array to represent the board
    // Array#matrix is a monkeypatched, custom method >:)
    const matrix = Array.matrix(BOARD_WIDTH, BOARD_HEIGHT);

    return matrix.map( (row, rowIndex) => (
      row.map( (index) => {
        return (
          <BoardSquare
            x={index}
            y={rowIndex}
            onDrop={this.updateDroppedTilePosition}
          />
        );
      })
    ));
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
    
    for(var i=0; i< this.state.answers.length; i++){
      if (word == this.state.answers[i]) {
        result = true;
        console.log("FOUND IT");
        var sc = this.state.score +10;
        this.setState({score: sc,
                       fadeIn: !this.state.fadeIn
                      });
  
                        setTimeout(() => {
                            this.setState({
                              fadeIn: !this.state.fadeIn
                          })
                        }, 2000);
      }
    }
   
    
  };
  render() {
    return (
      <div>
        <h1>LEVEL 1</h1>
          <h4> {this.state.answers.length} WORD COMBINATIONS</h4>
          <h4>Score: {this.state.score}</h4>
          <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
          <Alert color="success">
              CONGRATULATION RETARD, YOU ARE A BIT LESS DYSLEXIC
              </Alert>
                </Fade>
      <div id="scrabble">
        <div className="board-border">
          <div className="board">
          
            <FlipMove duration={1500} staggerDelayBy={150}>
              { this.renderTiles() }
            </FlipMove>
            { this.renderBoardSquares() }
          </div>
        </div>
      </div>
      
                <Modal isOpen={this.state.info} toggle={this.toggleInfo}
                       className={'modal-info ' + this.props.className}>
                  <ModalHeader toggle={this.toggleInfo}>Welcome to Scrabble</ModalHeader>
                  <ModalBody>
                    Your aim is to find as many words by connecting the tiles available. <br></br>
                    There are 10 levels with different amount of words to be found in each level.<br></br>
                    To get points of the word you need to drag the tiles and connect them in the fuscia box!<br></br>
                    For each level you get a time limit depending on the difficulty!<br></br>
                    Good luck!
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleInfo}>I am ready!</Button>{' '}
                  </ModalFooter>
                </Modal>

      </div>
    );
  }
};

const tileSource = {
  beginDrag(props) { return props; }
};

const tileTarget = {
  drop(props, monitor) {
    const tile1 = props;
    const tile2 = monitor.getItem();

    props.onDrop(tile1, tile2);
    props.onDrop(tile2, tile1);
  }
}

@DropTarget('tile', tileTarget, (connect, monitor) => ({
  connectDropTarget:  connect.dropTarget(),
  isOver:             monitor.isOver()
}))
@DragSource('tile', tileSource, (connect, monitor) => ({
  connectDragSource:  connect.dragSource(),
  isDragging:         monitor.isDragging()
}))
class Tile extends Component {
  static propTypes = {
    x:                  PropTypes.number.isRequired,
    y:                  PropTypes.number.isRequired,
    letter:             PropTypes.string.isRequired,
    points:             PropTypes.number.isRequired,
    connectDragSource:  PropTypes.func.isRequired,
    isDragging:         PropTypes.bool.isRequired
  };

  render() {
    const {
      connectDropTarget, connectDragSource, isDragging, letter, points, x, y
    } = this.props;

    const styles = {
      left:     x * SQUARE_SIZE - TILE_OFFSET,
      top:      y * SQUARE_SIZE - TILE_OFFSET,
      zIndex:   `${x+1}${y+1}`,
      opacity:  isDragging ? 0.5 : 1
    };

    return connectDropTarget(connectDragSource(
      <div className="tile" style={styles}>
        <span className="tile-letter">{letter}</span>
        <span className="tile-points">{points}</span>
      </div>
    ));
  }
}

const squareTarget = {
  drop(props, monitor) {
    props.onDrop(props, monitor.getItem());
  }
}

@DropTarget('tile', squareTarget, (connect, monitor) => ({
  connectDropTarget:  connect.dropTarget(),
  isOver:             monitor.isOver()
}))
class BoardSquare extends Component {
  renderSquare() {
    const classes = classNames({
      'board-square': true,
      'dragged-over': this.props.isOver
    });

    return <div className={classes}></div>
  }
  render() {
    if ( this.props.tile ) {
      // If this square already has a tile in it, we don't want to allow drops.
      return this.renderSquare();
    } else {
      return this.props.connectDropTarget( this.renderSquare() );
    }
  }
}


export default Scrabble;