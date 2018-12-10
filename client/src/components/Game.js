import React, { Component } from "react";
import BoxGrid from "./BoxGrid";
import WordList from "./WordList";
import axios from "axios";
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puzzleIndex: 1,
      time: new Date().getTime(),
      elapsedTime: 0,
      squares: [],
      answers: [],
      warning: false,
      timeTaken: "",
      target: {}
    };
    
    this.toggleWarning = this.toggleWarning.bind(this);
  }
   //save data to word find
  componentDidMount(){
    console.log("mounting");
    this.getMapFromServer(this.state.puzzleIndex);
  }
  //get map from database
  getMapFromServer(lvl) {
    axios
      .get("/api/wordFind/get",{
        params: {
          level: lvl
        }
      })
      .then(response => {
        //print  console() you can not add "string" in console ,just print it alone
        console.log("RESPONSE",response);
        this.setNextPuzzle(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }


  // componentDidMount() {
  //   this.getMapFromServer(this.puzzleIndex);

  // }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    //if(this.isPuzzleDone()) {
    //console.log("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
   // }
    }
  toggleWarning() {
    this.setState({
      warning: !this.state.warning,
    });
  }
  setNextPuzzle(data) {
    //const index = (this.state.puzzleIndex + 1) % this.state.data.length;
    //console.log(data);
    this.setState({
      puzzleIndex: this.state.puzzleIndex++,
      time: new Date().getTime(),
      squares: this.getSquares(data.grid),
      answers: this.getAnswers(data.answers),
      target: {}
    });
  }
  isPuzzleDone() {
    // Check if we've found all targets.
    for(let answer of this.state.answers) {
      if(!answer.isFound) {
        return;
      }
    }
    var finish = new Date().getTime();
    var t = finish -this.state.time;
    this.setState({elapsedTime: t,
                      warning: true,  
                                  })
    setTimeout(function() {
      this.getMapFromServer(this.state.puzzleIndex +1)
    }.bind(this), 2500);
  }
  getAnswers(squareData) {
    var answers = [];

    //console.log("SQUARE DATA", squareData);
    //answers.push([]);
    for (var r = 0; r < squareData.length; r++) {
      answers.push({
        value: squareData[r],
        isFound: false
      });
    }
    //this.state.answers= answers;
    return answers;
  }
  getSquares(squareData) {
    var squares = [];
    //console.log("sq", squareData);
    for (var r = 0; r < squareData.length; r++) {
      squares.push([]);
      for (var c = 0; c < squareData[r].length; c++) {
        var str = squareData[r][c].split("");
      //  console.log(str);
        for (var g = 0; g < str.length; g++) {
          squares[r].push({
            value: str[g],
            revealed: false
          });
        }
      }
     // console.log("state here", this.state);
    }

    return squares;
  }

  handleMakeSelection(selected) {
    // To track any answer we might find.
    let revealedTarget = null;

    // Is anything currently selected?
    if (selected && selected.length) {
      // Make sure the selected points are sorted.
      var strr = "";
      selected.sort(this.comparePoints);
      for (var i = 0; i < selected.length; i++) {
        strr =
          strr + this.state.squares[selected[i].row][selected[i].col].value;
        //console.log(this.state.squares[selected[i].row][selected[i].col]);
      }
     // console.log(strr);
     // console.log("Answers Here", this.state.answers);
      for (var i = 0; i < this.state.answers.length; i++) {
        //TODO: BETTER WAY OF CHECKING THIS

        if (strr === this.state.answers[i].value) {
          var n = this.state.answers;
          revealedTarget = selected;
          for (let point of revealedTarget) {
            this.state.squares[point.row][point.col].revealed = true;
          }
          n[i].isFound = true;

          this.setState({ answers: n });
          this.isPuzzleDone();
        }

        // // Update state with revealed squares.
        // this.setState({
        //   squares: squares
        // })
      }
    }
   // console.log("Target", revealedTarget);
  }
 
  
  render() {
    var answers = this.state.answers;
    var time = Date;
    //console.log("render", answers);
    //console.log("TIME",this.state.time);
    return (
      <div className="game-container">
      <h1>LEVEL {this.state.puzzleIndex}</h1>
        <WordList answers={answers} />
        <div className="game-board">
          <BoxGrid
            squares={this.state.squares}
            onMakeSelection={this.handleMakeSelection.bind(this)}
          />
        
        </div>
                <Modal isOpen={this.state.warning} toggle={this.toggleWarning}
                       className={'modal-warning ' + this.props.className}>
                  <ModalHeader toggle={this.toggleWarning}>Modal title</ModalHeader>
                  <ModalBody>
                    TIME TAKEN :{this.state.elapsedTime} MILISECONDS
                  </ModalBody>  
                  <ModalFooter>
                    <Button color="warning" onClick={this.toggleWarning}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggleWarning}>Cancel</Button>
                  </ModalFooter>
                </Modal>
      </div>
    );
    
  }
}

export default Game;
