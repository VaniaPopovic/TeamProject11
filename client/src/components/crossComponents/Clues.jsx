import React from "react";
import Clue from "./Clue";
//线索展示组件
class Clues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ol className="clues">
        {this.props.clues.map(clueObject => (
          <Clue clueItem={clueObject} />
        ))}
      </ol>
    );
  }
}

export default Clues;
