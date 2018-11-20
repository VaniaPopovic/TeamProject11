import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



function Box({value, pos, selected, revealed, events}) {

  const classes = ['square'];


  if(selected) {
    classes.push('is-selected');
  } else if(revealed) {
    classes.push('is-revealed');
  }

  return (
    <Button variant="contained" color="primary"
    className={classes.join(' ')}
    onMouseOver = {() => events.onMouseOver(pos)}
    onMouseDown = {() => events.onMouseDown(pos)}
    onMouseUp   = {() => events.onMouseUp(pos)}
    >
    {value}
    </Button>
  );

}

export default Box;
