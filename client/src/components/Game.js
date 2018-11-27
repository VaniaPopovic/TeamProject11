import React, {Component} from 'react';
import BoxGrid from './BoxGrid';


class Game extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      puzzleIndex: 0,
      squares: this.getSquares(props.data[0].grid),
      answers: this.getAnswers(props.data[0].answers),
      target:{}
    };
  }


  setNextPuzzle() {
    const index = (this.state.puzzleIndex + 1) % this.state.data.length;
    const data = this.state.data[index];
    this.setState({
      puzzleIndex: index,
      sourceWord: data.word,
      squares: this.getSquares(data.character_grid),
      answers: this.getAnswers(data.answers),
    });
  }
  getAnswers(squareData){
    var answers = [];
      //answers.push([]);
      //console.log("SQUARE DATA", squareData);
      
      for(var r = 0; r < squareData.length; r++) {
       answers.push(squareData[r])
      }
      //this.state.answers= answers;
      return answers;
    
  }
  getSquares(squareData){

    var squares = [];
    console.log("sq",squareData);
    for(var r = 0; r < squareData.length; r++) {
      squares.push([]);
      for(var c = 0; c < squareData[r].length; c++) {
		  		var str = squareData[r][c].split("");
		console.log(str);
		for(var g= 0; g <str.length; g++){
			squares[r].push({
          value: str[g],
          revealed: false
        });
		}
        
      }
      console.log("state here", this.state)
    }

    return squares;
  }

 handleMakeSelection(selected) {

   // To track any answer we might find.
   let revealedTarget = null;

   // Is anything currently selected?
   if(selected && selected.length) {
     // Make sure the selected points are sorted.
     var strr= ""
     selected.sort(this.comparePoints);
     for(var i=0; i<selected.length;i++){
      strr= strr+this.state.squares[selected[i].row][selected[i].col].value;
      console.log(this.state.squares[selected[i].row][selected[i].col])
     }
     console.log(strr);
     console.log("Answers Here",this.state.answers);
     for(var i= 0; i<this.state.answers.length;i ++){
       //TODO: BETTER WAY OF CHECKING THIS 
      if(strr===this.state.answers[i]){
        revealedTarget = selected;
        for(let point of revealedTarget) {
          this.state.squares[point.row][point.col].revealed = true;
        }
  
     }
    
      // // Update state with revealed squares.
      // this.setState({
      //   squares: squares
      // })
     }
   }
   console.log("Target",revealedTarget)
 }

  render() {
    return(
      <div className='game-container'>

        <div className='game-board'>
          <BoxGrid squares={this.state.squares}  onMakeSelection={this.handleMakeSelection.bind(this)}/>
        </div>

      </div>
    );
  }

}

export default Game;
