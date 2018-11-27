import React, { Component, lazy, Suspense } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,

} from 'reactstrap';
import Game from 'components/Game';
import puzzleData from 'DATA.json';
class Dashboard extends Component {
  constructor(props) {
    super(props);

   // TODO: Load data asynchronously.
    this.state = {
      puzzles: puzzleData.puzzles
    };
  }


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
			  <div>
				<h3>Find the words</h3>
				<h2></h2>
				<ul className='found-words'>
				<li>Cat</li>
				</ul>
				</div>
                 <Game data={this.state.puzzles}></Game>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
