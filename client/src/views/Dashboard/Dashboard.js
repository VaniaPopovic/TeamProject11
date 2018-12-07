import React, { Component, lazy, Suspense } from "react";
import { Card, CardBody, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import Game from "components/Game";
import puzzleData from "DATA.json";
import PuzzleGenerator from "../../components/PuzzleGenerator";
class Dashboard extends Component {
  constructor(props) {
    super(props);

    // TODO: Load data asynchronously.
    this.state = {
      puzzles: puzzleData.puzzles,
      info: true,
    };
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }
  

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <Game data={this.state.puzzles} />
                <PuzzleGenerator />
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: "70px" }} />
            </Card>
          </Col>
        </Row>
        <Modal
          isOpen={this.state.info}
          toggle={this.toggleInfo}
          className={"modal-info " + this.props.className}
        >
          <ModalHeader toggle={this.toggleInfo}>
            Welcome to the Word-Find game!
          </ModalHeader>
          <ModalBody>
          
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleInfo}>
              I am ready!
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
