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
      <li className="clue">
        {this.props.clueItem.number+ ". "+ this.props.clueItem.clue + '\u00A0\u00A0\u00A0\u00A0'}
        <button type="button" className={'btn btn-primary'}  onClick={this.showAnswer}> answer</button>
      </li>
    );
  }
}

export default Clue;
