import React from "react";
//每一个方格组件
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      isCorrect: false
    };

    this.handleChange = this.handleChange.bind(this);
  }
  //检测方框填入字的改变
  handleChange(event) {
    //当输入字母正确
    if (event.target.value === this.props.letter && !this.state.isCorrect) {
      this.setState({ value: event.target.value, isCorrect: true });

      let cluesToUpdate = [];
      if (this.props.across) {
        cluesToUpdate.push({
          direction: "across",
          number: this.props.clueAcross
        });
      }

      if (this.props.down) {
        cluesToUpdate.push({
          direction: "down",
          number: this.props.clueDown
        });
      }

      this.props.onCorrect(cluesToUpdate);
    }
    //当输入字母不正确
    else if (
      this.state.isCorrect &&
      this.state.value &&
      event.target.value !== this.props.letter
    ) {
      this.setState({
        value: event.target.value,
        isCorrect: false
      });

      this.props.onIncorrect();
    }
  }

  render() {
    if (!this.props.letter) {
      return <div className="box blank" />;
    }
    if (this.props.number) {
      return (
        <div className="box-wrapper">
          <label className="box-label box-label--number">
            {this.props.number}
          </label>
          <input
            type="text"
            style={{
              borderColor: this.state.isCorrect ? "red" : "black"
            }}
            onChange={this.handleChange}
            maxLength="1"
            disabled={this.state.isCorrect}
            className="box"
          />
        </div>
      );
    }
    return (
      <input
        type="text"
        style={{
          borderColor: this.state.isCorrect ? "red" : "black"
        }}
        onChange={this.handleChange}
        maxLength="1"
        disabled={this.state.isCorrect}
        className="box"
      />
    );
  }
}

export default Box;
