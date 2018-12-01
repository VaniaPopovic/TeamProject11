import React, { Component } from "react";
import Boxes from "./Boxes";
import Clues from "./Clues";

//棋盘组件，并添加线索的名称
class Crosswords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clues: {
        across: [
          {
            number: 1,
            clue: "A responsive JavaScript library?",
            answer: "react"
          }
        ],
        down: [
          {
            number: 1,
            clue: "A method of making an element in the DOM?",
            answer: "render"
          },
          {
            number: 2,
            clue: "The most handsome boy?",
            answer: "charles"
          }
        ]
      },
      grid: [
        {
          id: "A1",
          letter: null
        },
        {
          id: "A2",
          letter: null
        },
        {
          id: "A3",
          letter: "r",
          across: true,
          clue_across: 1,
          down: true,
          clue_down: 1,
          number: 1
        },
        {
          id: "A4",
          letter: "e",
          across: true,
          clue_across: 1,
          down: false,
          clue_down: null
        },
        {
          id: "A5",
          letter: "a",
          across: true,
          clue_across: 1,
          down: false,
          clue_down: null
        },
        {
          id: "A6",
          letter: "c",
          across: true,
          clue_across: 1,
          down: true,
          clue_down: 2,
          number: 2
        },
        {
          id: "A7",
          letter: "t",
          across: true,
          clue_across: 1,
          down: false,
          clue_down: null
        },
        {
          id: "A8",
          letter: null
        },
        {
          id: "B1",
          letter: null
        },
        {
          id: "B2",
          letter: null
        },
        {
          id: "B3",
          letter: "e",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 1
        },
        {
          id: "B4",
          letter: null
        },
        {
          id: "B5",
          letter: null
        },
        {
          id: "B6",
          letter: "h",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 2
        },
        {
          id: "B7",
          letter: null
        },
        {
          id: "B8",
          letter: null
        },
        {
          id: "C1",
          letter: null
        },
        {
          id: "C2",
          letter: null
        },
        {
          id: "C3",
          letter: "n",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 1
        },
        {
          id: "C4",
          letter: null
        },
        {
          id: "C5",
          letter: null
        },
        {
          id: "C6",
          letter: "a",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 2
        },
        {
          id: "C7",
          letter: null
        },
        {
          id: "C8",
          letter: null
        },
        {
          id: "D1",
          letter: null
        },
        {
          id: "D2",
          letter: null
        },
        {
          id: "D3",
          letter: "d",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 1
        },
        {
          id: "D4",
          letter: null
        },
        {
          id: "D5",
          letter: null
        },
        {
          id: "D6",
          letter: "r",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 2
        },
        {
          id: "D7",
          letter: null
        },
        {
          id: "D8",
          letter: null
        },
        {
          id: "E1",
          letter: null
        },
        {
          id: "E2",
          letter: null
        },
        {
          id: "E3",
          letter: "e",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 1
        },
        {
          id: "E4",
          letter: null
        },
        {
          id: "E5",
          letter: null
        },
        {
          id: "E6",
          letter: "l",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 2
        },
        {
          id: "E7",
          letter: null
        },
        {
          id: "E8",
          letter: null
        },
        {
          id: "F1",
          letter: null
        },
        {
          id: "F2",
          letter: null
        },
        {
          id: "F3",
          letter: "r",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 1
        },
        {
          id: "F4",
          letter: null
        },
        {
          id: "F5",
          letter: null
        },
        {
          id: "F6",
          letter: "e",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 2
        },
        {
          id: "F7",
          letter: null
        },
        {
          id: "F8",
          letter: null
        },
        {
          id: "G1",
          letter: null
        },
        {
          id: "G2",
          letter: null
        },
        {
          id: "G3",
          letter: null
        },
        {
          id: "G4",
          letter: null
        },
        {
          id: "G5",
          letter: null
        },
        {
          id: "G6",
          letter: "s",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 2
        },
        {
          id: "G7",
          letter: null
        },
        {
          id: "G8",
          letter: null
        },
        {
          id: "H1",
          letter: null
        },
        {
          id: "H2",
          letter: null
        },
        {
          id: "H3",
          letter: null
        },
        {
          id: "H4",
          letter: null
        },
        {
          id: "H5",
          letter: null
        },
        {
          id: "H6",
          letter: null
        },
        {
          id: "H7",
          letter: null
        },
        {
          id: "H8",
          letter: null
        }
      ]
    };
  }
  //以下为JSX语法，在JSX中用{}来包含JS语句
  render() {
    return (
      <div className="crossword">
        <div className="clue-lists">
          <div>
            <h2>Across</h2>
            {/*属性小写，把clues属性传到下一个组件，在Clues组件中用this.props.clues来调用传入的参数*/}
            <Clues clues={this.state.clues.across} />
          </div>
          <div>
            <h2>Down</h2>
            {/*复用Clues组件，把要传入的参数放到clues中*/}
            <Clues clues={this.state.clues.down} />
          </div>
        </div>
        <Boxes clues={this.state.clues} grid={this.state.grid} />
      </div>
    );
  }
}

export default Crosswords;
