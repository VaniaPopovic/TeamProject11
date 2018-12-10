import React from "react";
import { Button } from "reactstrap";

function Box({ value, pos, selected, revealed, events }) {
  const classes = ["square"];

  if (selected) {
    classes.push("is-selected");
  } else if (revealed) {
    classes.push("is-revealed");
  }

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.join(" ")}
      onMouseOver={() => events.onMouseOver(pos)}
      onMouseDown={() => events.onMouseDown(pos)}
      onMouseUp={() => events.onMouseUp(pos)}
    >
      {value}
    </Button>
  );
}

export default Box;
