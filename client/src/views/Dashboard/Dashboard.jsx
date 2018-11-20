import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import { cardTitle } from "assets/jss/material-dashboard-react.jsx";

import Game from 'components/Game';
import puzzleData from 'DATA.json';

const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  }
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Load data asynchronously.
    this.state = {
      puzzles: puzzleData.puzzles
    };

  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.textCenter} style={{ width: "100%" }}>
          <CardBody>
            <Game data={this.state.puzzles}></Game>
          </CardBody>
        </Card>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
