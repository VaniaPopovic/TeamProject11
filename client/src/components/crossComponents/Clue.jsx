import React from "react";

//线索展示组件
class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHints: false,
      hints: ""
    };
    this.showAnswer = this.showAnswer.bind(this);
  }

  showAnswer() {
    let answer = this.props.clueItem.answer;
    let index = 1;
    let hint = answer.substr(0, index) + " _ _ " + answer.substr(index + 2);
    this.setState({
      showHints: true,
      hints: hint
    });

    //alert(this.props.clueItem.answer);
  }

  render() {
    return (
      <li className="clue">
        {this.props.clueItem.number +
          ". " +
          this.props.clueItem.clue +
          "\u00A0\u00A0\u00A0\u00A0"}
        <button
          type="button"
          className={"btn btn-primary"}
          onClick={this.showAnswer}
        >
          {this.state.showHints ? this.state.hints : "Hints"}
        </button>
      </li>
    );
  }
}

export default Clue;
