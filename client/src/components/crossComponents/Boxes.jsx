import React from "react";
import Box from "./Box";
//boxes不做任何处理，在box中做判断处理；
//constructor只能接收初始化的数据，如果想要之前改变后的数据，需要在render或者componentDidUpdate中接收
class Boxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      answers: {
        across: props.clues.across.map(clue => {
          return this.initClueData(clue);
        }),
        down: props.clues.down.map(clue => {
          return this.initClueData(clue);
        })
      },
      answer: " ",
      correctLetters: 0
    };
    this.handleCount = this.handleCount.bind(this);
    this.handleCorrectGuess = this.handleCorrectGuess.bind(this);
    //this.handleIncorrectGuess = this.handleIncorrectGuess.bind(this);
  }

  //初始化数据
  initClueData(data) {
    return {
      number: data.number,
      answer: data.answer,
      correct: 0,
      solved: false
    };
  }

  //猜词正确
  handleCorrectGuess(cluesToUpdate) {
    for (const clue of cluesToUpdate) {
      console.log("enter guess--------");
      const clueNumber = clue.number;
      let currentState = this.state.answers;
      if (clue.direction == "across") {
        for (const temp of currentState.across) {
          // console.log(temp);
          if (temp.number === clueNumber) {
            temp.correct++;
          }
          if (temp.correct === temp.answer.length) {
            if (temp.solved === false) {
              console.log(
                "answer Correct!!!!!!!!!!" + clue.direction + temp.number
              );
            }
            temp.solved = true;
          }
          this.setState({
            answers: currentState
          });
        }
      } else {
        for (const temp of currentState.down) {
          // console.log(temp);
          if (temp.number === clueNumber) {
            temp.correct++;
          }
          //console.log(temp);
          if (temp.correct === temp.answer.length) {
            if (temp.solved === false) {
              console.log(
                "answer Correct!!!!!!!!!!" + clue.direction + temp.number
              );
            }
            temp.solved = true;
          }
          this.setState({
            answers: currentState
          });
        }
      }
      /*
      let currentClueObject = currentState[clue.direction][clueIndex];
      currentClueObject.correct++;

      if (currentClueObject.correct === currentClueObject.answer.length) {
        currentClueObject.solved = true;
        console.log("answer Correct!");
      }

      currentState[clue.direction][clueIndex] = currentClueObject;

      this.setState({
        answers: currentState
      });
      */
    }
  }

  handleIncorrectGuess() {
    if (this.state.correctLetters > 0) {
      this.setState({
        correctLetters: this.state.correctLetters - 1
      });
    }
  }

  //处理输入正确的结果并计数，当达到数目则通关,totalCorrect作为标志看是否答对所有
  handleCount() {
    this.setState({ count: this.state.count + 1 });
    console.log("Input number" + this.state.count);
    console.log("total:" + this.props.totalCorrect);
    if (this.state.count === this.props.totalCorrect) {
      this.props.finishAndNextLevel();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // 得到了数据，操的，要用IF条件，这里是表示如果数据更新则执行setstate
    if (prevProps !== this.props) {
      //console.log(this.props);
      this.setState({
        answers: {
          across: this.props.clues.across.map(clue => {
            return this.initClueData(clue);
          }),
          down: this.props.clues.down.map(clue => {
            return this.initClueData(clue);
          })
        }
      });
    }
  }

  //如果要向组件传递参数使用this.props
  render() {
    //console.log("render",this.props.key);
    let className = "boxes";
    if (this.props.level === 8) {
      className = "boxes8";
    }
    if (this.props.level === 9) {
      className = "boxes8";
    }
    if (this.props.level === 10) {
      className = "boxes10";
    }
    //className指定在CSS中的引用名称
    return (
      <div className={className}>
        {this.props.grid.map(box => (
          <Box
            key={box.id}
            letter={box.letter}
            across={box.across}
            clueAcross={box.clue_across}
            down={box.down}
            number={box.number}
            clueDown={box.clue_down}
            handleCount={this.handleCount}
            onCorrect={this.handleCorrectGuess}
          />
        ))}
      </div>
    );
  }
}

export default Boxes;
