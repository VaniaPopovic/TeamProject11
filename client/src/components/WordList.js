import React, { Component } from "react";
class WordList extends Component {
  render() {
    var answers = this.props.answers;
    console.log("ans", answers);
    return (
      <div>
        <h3>Find the words</h3>
        {/*TODO: PUT ME IN A STYLISH BOX POSSIBLY GRID WITH COLUMNS*/}
        <ul className="list-group">
          {answers.map(answer => {
            if (answer.isFound) {
              return (
                <li className="list-group-item active" key={answer.value}>
                  <del>{answer.value}</del>
                </li>
              );
            } else {
              return (
                <li className="list-group-item active" key={answer.value}>
                  {answer.value}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
export default WordList;
