import React, {Component} from 'react';
import BoxGrid from './BoxGrid';


class Game extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      puzzleIndex: 0,
      squares: this.getSquares(props.data[0].grid)

    };
  }


  setNextPuzzle() {
    const index = (this.state.puzzleIndex + 1) % this.state.data.length;
    const data = this.state.data[index];
    this.setState({
      puzzleIndex: index,
      sourceWord: data.word,
      squares: this.getSquares(data.character_grid),
    });
  }

  getSquares(squareData){

    var squares = [];

    for(var r = 0; r < squareData.length; r++) {
      squares.push([]);
      for(var c = 0; c < squareData[r].length; c++) {
		  		var str = squareData[r][c].split("");
		console.log(str);
		for(var g= 0; g <str.length; g++){
			squares[r].push({

          value: str[g],
          revealed: false
        })
		}
        
      }
    }

    return squares;
  }

  render() {
    return(
      <div className='game-container'>

        <div className='game-board'>
          <BoxGrid squares={this.state.squares}  />
        </div>

      </div>
    );
  }

}

export default Game;
