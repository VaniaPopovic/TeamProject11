import React, { Component } from "react";
import Boxes from "./Boxes";
import Clues from "./Clues";
import axios from "axios";

//棋盘组件，并添加线索的名称
class Crosswords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      totalCorrect: 0,
      clues: {
        across: [],
        down: []
      },
      grid: []
    };
    this.postMap = this.postMap.bind(this);
  }

//从数据库得到数据并放入state中
  componentDidMount() {

    axios.get("/api/crosswords/get", {
      params: {
        level: 1
      }
    })
      .then(response => {
        //在浏览器console打印
        this.setState({
          totalCorrect: response.data.totalCorrect,
          level: response.data.level,
          clues: response.data.clues,
          grid: response.data.grid

        });
      })
      .catch((error) => {
        console.log(error);
      });


  }

  postMap() {
    axios.post("/api/crosswords/post")
      .then(res => {
        alert("post succesful");

      });

  }

  //以下为JSX语法，在JSX中用{}来包含JS语句
  render() {
    return (
      <div className="crossword">
        <h1>LEVEL {this.state.level}
          <button onClick={this.postMap}>post map</button>
        </h1>

        <div className="clue-lists">
          <div>

            <h3>Across</h3>
            {/*属性小写，把clues属性传到下一个组件，在Clues组件中用this.props.clues来调用传入的参数*/}
            <Clues clues={this.state.clues.across}/>
          </div>
          <div>
            <h3>Down</h3>

            {/*复用Clues组件，把要传入的参数放到clues中*/}
            <Clues clues={this.state.clues.down}/>
          </div>
        </div>
        <Boxes grid={this.state.grid} totalCorrect={this.state.totalCorrect}/>
      </div>
    );
  }
}

export default Crosswords;
