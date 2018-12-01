import React from "react";
import Box from "./Box";
class Boxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {
        across: props.clues.across.map(clue => {
          return this.initClueData(clue);
        }),
        down: props.clues.down.map(clue => {
          return this.initClueData(clue);
        })
      },
      answer: "react",
      correctLetters: 0
    };

    this.handleCorrectGuess = this.handleCorrectGuess.bind(this);
    this.handleIncorrectGuess = this.handleIncorrectGuess.bind(this);
  }
  //初始化数据
  initClueData(data) {
    return {
      answer: data.answer,
      correct: 0,
      solved: false
    };
  }
  //猜词正确
  handleCorrectGuess(cluesToUpdate) {
    for (const clue of cluesToUpdate) {
      //设置每个Letter正确则进入debugger模式
      //debugger;
      const clueIndex = clue.number - 1;
      let currentState = this.state.answers;
      let currentClueObject = currentState[clue.direction][clueIndex];
      currentClueObject.correct++;

      if (currentClueObject.correct === currentClueObject.answer.length) {
        currentClueObject.solved = true;
        //console.log("correct!");
        //提示正确并打印正确的answer
        alert("You got words ----" + currentClueObject.answer);
      }

      currentState[clue.direction][clueIndex] = currentClueObject;

      this.setState({
        answers: currentState
      });
    }
  }
  handleIncorrectGuess() {
    if (this.state.correctLetters > 0) {
      this.setState({
        correctLetters: this.state.correctLetters - 1
      });
    }
  }
  //如果要向组件传递参数可以使用this.props
  render() {
    return (
      <div className="boxes">
        {this.props.grid.map(box => (
          <Box
            key={box.id}
            letter={box.letter}
            across={box.across}
            clueAcross={box.clue_across}
            down={box.down}
            number={box.number}
            clueDown={box.clue_down}
            answers={this.state.answers}
            onCorrect={this.handleCorrectGuess}
            onIncorrect={this.handleIncorrectGuess}
          />
        ))}
        <h2>Level 1</h2>
        <button>next level</button>
      </div>
    );
  }
}

export default Boxes;
