import React, { Component } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import axios from "axios";

import Scrabble from "../../components/WordUnscramble/Scrabble";
class WordUnscramble extends Component {
  constructor(props) {
    super(props);

    // TODO: Load data asynchronously.
    this.state = {
     
    };
    this.postMap = this.postMap.bind(this);
  }
  postMap() {
    axios.post("/api/Scrabble/post").then(res => {
      alert("post succesful");
    });
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
      
        <Row>
         <button onClick={this.postMap}>post map</button>
          <Col xs="12" sm="12" lg="12">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <Scrabble />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default WordUnscramble;
