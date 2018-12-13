import React, { Component } from "react";
import BoxGrid from "./BoxGrid";
import WordList from "./WordList";
import axios from "axios";
import {
  Button,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puzzleIndex: 1,
      level: 1,
      difficulty: "",
      time: new Date().getTime(),
      score:0,
      elapsedTime: 0,
      squares: [],
      answers: [],
      warning: false,
      warningFinish: false,
      timeTaken: "",
      target: {}
    };

    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleWarningFinish = this.toggleWarningFinish.bind(this);
    this.skipLevel = this.skipLevel.bind(this);
  }
  //save data to word find
  componentDidMount() {
    console.log("mounting");
    this.getMapFromServer(this.state.puzzleIndex);
  }
  //get map from database
  getMapFromServer(lvl) {
    axios
      .get("/api/wordFind/get", {
        params: {
          puzzleIndex: lvl
        }
      })
      .then(response => {
        console.log("RESPONSE", response);
        this.setNextPuzzle(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    //if(this.isPuzzleDone()) {
    //console.log("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    // }
  }
  toggleWarning() {
    this.setState({
      warning: !this.state.warning
    });
  }
  toggleWarningFinish() {
    this.setState({
      warningFinish: !this.state.warningFinish
    });
  }
  //skip this level
  skipLevel() {
    this.toggleWarning();
    this.postScores(this.state.puzzleIndex,"0",false,0);
    this.getMapFromServer(this.state.puzzleIndex + 1);
  }
  setNextPuzzle(data) {
    //const index = (this.state.puzzleIndex + 1) % this.state.data.length;
    //console.log(data);
    this.setState({
      puzzleIndex: data.puzzleIndex,
      time: new Date().getTime(),
      squares: this.getSquares(data.grid),
      answers: this.getAnswers(data.answers),
      score:0,
      level: data.level,
      difficulty: data.difficulty,
      target: {}
    });
  }
  isPuzzleDone() {
    // Check if we've found all targets.
    for (let answer of this.state.answers) {
      if (!answer.isFound) {
        return;
      }
    }
    var finish = new Date().getTime();
    var t = (finish - this.state.time)/1000;
    this.postScores(this.state.puzzleIndex,t,true,this.state.score);
    this.setState({ elapsedTime: t, warningFinish: true });

    setTimeout(
      function() {
        this.getMapFromServer(this.state.puzzleIndex + 1);
      }.bind(this),
      2500
    );
  }
  postScores(lvl,time,finished,score) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.post('/api/puzzle/updateWordFindScore', {level:lvl,difficulty:this.state.difficulty,timeTaken:time,isFinished:finished, score:score})
      .then(res => {
       
        console.log("vilo",res);
      })
      .catch((error) => {
        // if(error.response.status === 401) {
        //   this.props.history.push("/login");
        // }
       // console.log("errorassad",error);
       console.log(error)
      });
  }
  getAnswers(squareData) {
    var answers = [];
    for (var r = 0; r < squareData.length; r++) {
      answers.push({
        value: squareData[r],
        isFound: false
      });
    }
    return answers;
  }
  getSquares(squareData) {
    var squares = [];
    for (var r = 0; r < squareData.length; r++) {
      squares.push([]);
      for (var c = 0; c < squareData[r].length; c++) {
        var str = squareData[r][c].split("");
        for (var g = 0; g < str.length; g++) {
          squares[r].push({
            value: str[g],
            revealed: false
          });
        }
      }
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
      for (let i = 0; i < selected.length; i++) {
        strr =
          strr + this.state.squares[selected[i].row][selected[i].col].value;
        //console.log(this.state.squares[selected[i].row][selected[i].col]);
      }
      // console.log(strr);
      // console.log("Answers Here", this.state.answers);
      for (let i = 0; i < this.state.answers.length; i++) {
        //TODO: BETTER WAY OF CHECKING THIS

        if (strr === this.state.answers[i].value) {
          var n = this.state.answers;
          revealedTarget = selected;
          for (let point of revealedTarget) {
            this.state.squares[point.row][point.col].revealed = true;
          }
          n[i].isFound = true;
          
          this.setState({ answers: n ,
          score: this.state.score+10});
          this.isPuzzleDone();
        }
      }
    }
  }
  //向数据库里存地图
  postMap() {
    axios.post("/api/wordFind/post").then(res => {
      alert("post succesful");
    });
  }

  render() {
    return (
      <div className="game-container">
       
        <h1>LEVEL {this.state.level}</h1>
        <h3>Difficulty: {this.state.difficulty}</h3>
        <h3>Score: {this.state.score}</h3>

        <div>
          {/*<button onClick={this.postMap}>post map</button>*/}
          <button
            type="button"
            className={"btn btn-success"}
            onClick={this.toggleWarning}
          >
            Skip level
          </button>
        </div>
        <br></br>
        <Row>
        <Col xs="8" className="text-center pagination-centered mx-auto">
            <BoxGrid 
              squares={this.state.squares}
              onMakeSelection={this.handleMakeSelection.bind(this)}
            />
        </Col>
        <Col xs="4" className="mx-auto">
        <h3>Words to find:</h3>
          <WordList answers={this.state.answers} />
        </Col>
        </Row>
        {/*finish this level*/}
        <Modal
          isOpen={this.state.warningFinish}
          toggle={this.toggleWarningFinish}
          className={"modal-info " + this.props.className}
        >
          <ModalHeader toggle={this.toggleWarningFinish}>
            Congratulations!
          </ModalHeader>
          <ModalBody>
            You have finished this level! Time taken : {this.state.elapsedTime}{" "}
            seconds.
            <br />
            Now you can go to the next level.
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggleWarningFinish}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
        {/*Skip to next level*/}
        <Modal
          isOpen={this.state.warning}
          toggle={this.toggleWarning}
          className={"modal-info " + this.props.className}
        >
          <ModalHeader toggle={this.toggleWarning}>Warning!</ModalHeader>
          <ModalBody>
            If you skip this level, you will not get full score of this level.
            <br />
            Do you want to skip this level?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.skipLevel}>
              Confirm
            </Button>
            <Button color="secondary" onClick={this.toggleWarning}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Game;
