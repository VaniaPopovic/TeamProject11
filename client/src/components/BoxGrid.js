import React, {Component} from 'react';
import Box from './Box';



class BoxGrid extends React.Component {

 
  constructor(props) {
    super(props);

    this.state = {
      dragStart: null,
      selection: []
    };
  }

 
  handleMouseDown({row, col}){
    
	
    this.setState({
      dragStart: {row: row, col: col},
      selection: [{row: row, col: col}]
    });

  }

  handleMouseOver({row, col}) {
    
	//IF WE STARTED DRAG
    if(this.state.dragStart) {

      
      const selected = this.getSelection(
        this.state.dragStart,
        {row: row, col: col}
      );

	  
      this.setState({
        selection: selected
      });

    }
  }

  
  handleMouseUp(pos){

  
    if(this.props.onMakeSelection) {
      this.props.onMakeSelection(this.state.selection);
    }

   
    this.setState({
      dragStart: null,
      selection: []
    });

  }

 
  getSelection(start, end) {
    
    let selected = [];

    if(start && end) {
     
      let difCol = end.col - start.col;
      let difRow = end.row - start.row;
     
      let incCol = Math.sign(difCol);
      let incRow = Math.sign(difRow);
    
      let count = 0;
      let r = start.row;
      let c = start.col;

     
      if(incRow == 0 || incCol == 0) {
        
        count = Math.max(Math.abs(difRow), Math.abs(difCol));
      } else {
     
        count = Math.min(Math.abs(difRow), Math.abs(difCol));
      }

      for(let i = 0; i <= count; i++) {
        selected.push({row: r, col: c});
        c += incCol;
        r += incRow;
      }
    }


    return selected;
  }


  render() {

  
    var id = 0;

    var mouseEvents = {
      onMouseOver: this.handleMouseOver.bind(this),
      onMouseDown: this.handleMouseDown.bind(this),
      onMouseUp  : this.handleMouseUp.bind(this)
    }


    const isSelected = function(pos) {
      for(let point of this.state.selection) {
        if(point.row === pos.row && point.col === pos.col) {
          return true;
        }
      }
      return false;
    }.bind(this);

    
    var grid = this.props.squares.map((row, ri) => {
      return (
        <div key={++id} className="board-row">
        {
          row.map((col, ci) => {
            const pos = {row: ri, col: ci};

            return (
              <Box
                key={++id}
                value={col.value}
                pos={pos}
                revealed={col.revealed}
                selected={isSelected(pos)}
                events={mouseEvents}
              />
            )
          })
        }
        </div>
      );
    });

    return (
      <div className="board">{grid}</div>
    );
  }
}

export default BoxGrid;
