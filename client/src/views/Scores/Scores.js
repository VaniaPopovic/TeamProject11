import React, { Component, lazy, Suspense } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Table,
  Badge
} from "reactstrap";
import axios from "axios";

class Scores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: {},
      wordFind: [],
      crossWord:[],
      scrabble:[]
    };
  }

  componentDidMount() {
    axios
      .post("/api/puzzle/getScrabble")
      .then(response => {
        console.log("RESPONSE", response);
        var result =[];
        if(response.data.wordFindInfo){
          Object.keys(response.data.wordFindInfo.completed).map(function(key) {
            result.push({"level":response.data.wordFindInfo.completed[key].level,
            "timeTaken":response.data.wordFindInfo.completed[key].timeTaken,
            "difficulty":response.data.wordFindInfo.completed[key].difficulty,
            "score":response.data.wordFindInfo.completed[key].score,
            "isFinished":response.data.wordFindInfo.completed[key].isFinished
          });
          });
        }
        
        var result2 =[];
        if(response.data.crossWordInfo){
          Object.keys(response.data.crossWordInfo.completed).map(function(key) {
            result2.push({"level":response.data.crossWordInfo.completed[key].level,
            "timeTaken":response.data.crossWordInfo.completed[key].timeTaken,
            "score":response.data.crossWordInfo.completed[key].score,
            "isFinished":response.data.crossWordInfo.completed[key].isFinished
          });
          });
        }
        
       var result3 =[];
       if(response.data.scrabbleInfo){
        Object.keys(response.data.scrabbleInfo.completed).map(function(key) {
          result3.push({"level":response.data.scrabbleInfo.completed[key].level,
          "timeTaken":response.data.scrabbleInfo.completed[key].timeTaken,
          "score":response.data.scrabbleInfo.completed[key].score,
          "isFinished":response.data.scrabbleInfo.completed[key].isFinished
        });
        });
       }
       
      //  console.log(result);
        this.setState({ scores: response.data, wordFind: result, crossWord: result2, scrabble: result3 });
        // this.setNextPuzzle(response.data);
      })
      .catch(error => {
        console.log("failed");
        console.log(error);
      });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  //save data to word find

  render() {
    //var scra= this.state.scores;
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">Word Find Scores</div>
          <div className="card-body">
            <Table responsive>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Difficulty</th>
                  <th>Time Taken</th>
                  <th>Score</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.wordFind.map((item, i)=>
                <tr>
                <td>{item.level}</td>
                <td>{item.difficulty}</td>
                <td>{item.timeTaken == 0? "N/A":item.timeTaken}</td>
                <td>{item.score}</td>
                <td>{item.isFinished == true ? <Badge color="success">Passed</Badge>:<Badge color="danger">Skipped</Badge>}</td>
                
              </tr>
                  )}
               
              </tbody>
            </Table>
          </div>
        </div>
        <div className="card">
          <div className="card-header">CrossWord Scores</div>
          <div className="card-body">
            <Table responsive>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Time Taken</th>
                  <th>Score</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                { this.state.crossWord != null &&
                  this.state.crossWord.map((item, i)=>
                <tr>
                <td>{item.level}</td>
                <td>{item.timeTaken == 0? "N/A":item.timeTaken}</td>
                <td>{item.score}</td>
                <td>{item.isFinished == true ? <Badge color="success">Passed</Badge>:<Badge color="danger">Skipped</Badge>}</td>
                
              </tr>
                  )}
               
              </tbody>
            </Table>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Scrabble Scores</div>
          <div className="card-body">
            <Table responsive>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Time Taken</th>
                  <th>Score</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.scrabble.map((item, i)=>
                <tr>
                <td>{item.level}</td>
                <td>{item.timeTaken == 0? "N/A":item.timeTaken}</td>
                <td>{item.score}</td>
                <td>{item.isFinished == true ? <Badge color="success">Passed</Badge>:<Badge color="danger">Skipped</Badge>}</td>
                
              </tr>
                  )}
               
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Scores;
