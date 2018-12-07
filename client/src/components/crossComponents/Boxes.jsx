import React from "react";
import Box from "./Box";
//boxes不做任何处理，在box中做判断处理；
//constructor只能接收初始化的数据，如果想要之前改变后的数据，需要在render或者componentDidUpdate中接收
class Boxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0

    };
    this.handleCount = this.handleCount.bind(this);
    //this.handleCorrectGuess = this.handleCorrectGuess.bind(this);
    //this.handleIncorrectGuess = this.handleIncorrectGuess.bind(this);
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
    console.log(this.state);
    for (const clue of cluesToUpdate) {
      //设置每个Letter正确则进入debugger模式
      debugger;
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

//处理输入正确的结果并计数，当达到数目则通关,totalCorrect作为标志看是否答对所有
  handleCount() {
    this.state.count++;
    console.log("input correct number" + this.state.count);
    console.log("total:" + this.props.totalCorrect);
    if (this.state.count === this.props.totalCorrect) {

      this.props.finishAndNextLevel();
    }


  }
/*
  componentDidUpdate(prevProps, prevState) {
    // 得到了数据，操的，要用IF条件，这里是表示如果数据更新则执行setstate
    console.log("sadfsdf"+this.props.totalCorrect);
    if (prevProps !== this.props) {
      console.log("Boxes------",this.props);
      this.setState({
        totalCorrect: this.props.totalCorrect,

      });

    }
  }
*/



  //如果要向组件传递参数使用this.props
  render() {
    //console.log("render",this.props.key);
    let className = 'boxes';
    if(this.props.level === 8){
      className = 'boxes8'
    }
    if(this.props.level === 9){
      className = 'boxes8'
    }
    if(this.props.level === 10){
      className = 'boxes10'
    }
    //className指定在CSS中的引用名称
    return (
      <div className={className} >
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

          />

        ))}


      </div>
    );
  }
}

export default Boxes;
