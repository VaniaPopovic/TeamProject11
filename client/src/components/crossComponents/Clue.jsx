import React from "react";

//线索展示组件
class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showAnswer = this.showAnswer.bind(this);
  }

  showAnswer() {
    alert(this.props.clueItem.answer);
  }

  render() {
    return (
      <li className="cluel">
        {this.props.clueItem.clue}
        <button onClick={this.showAnswer}> answer</button>
      </li>
    );
  }
}

export default Clue;
