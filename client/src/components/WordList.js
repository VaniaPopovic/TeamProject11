import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
class WordList extends Component {
  render() {
    var answers = this.props.answers;
    console.log("ans", answers);
    return (
      <div>
        <ListGroup >
          {answers.map(answer => {
            if (answer.isFound) {
              return (
                <ListGroupItem key={answer.value}>
                 <p><del>{answer.value}</del></p>
                </ListGroupItem>
              );
            } else {
              return (
                <ListGroupItem className="list-group-item active" key={answer.value}>
                  <p>{answer.value}</p>
                </ListGroupItem>
              );
            }
          })}
        </ListGroup>
      </div>
    );
  }
}
export default WordList;
