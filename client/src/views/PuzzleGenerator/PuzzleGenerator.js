import React, { Component, lazy, Suspense } from "react";
import {
  Button,
  Badge,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row
} from "reactstrap";
// Radio input

import { Formik, Field } from "formik";
import PuzzleGeneration from "../../components/PuzzleGeneration";

class PuzzleGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
     level:0,
     answers:[],
     difficulty:"",
     size:0,
     puzzleIndex:0,
    };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>PUZZLE GENERATOR</CardHeader>
              <CardBody>
                <div>
                  <h3>This is here for demonstration purposes</h3>
                  <p>Ideally we wouldnt wont to expose this API to the Users but for the sake of demonstration it was added here.</p>
                  <p><b>SIZE is a number, difficulty is three options "EASY", "NORMAL", "HARD" and Answers Comma seperated values without spaces</b></p>
                  <Formik
                    initialValues={{ level: "", answers: "", difficulty: "", size:"", puzzleIndex:"" }}
                    onSubmit={(values, { setSubmitting }) => {
                      console.log(values);
                      setTimeout(() => {
                        var Ar = values.answers.split(',');
                       this.setState({
                         level: values.level,
                        difficulty: values.difficulty,
                        answers: Ar,
                        puzzleIndex: values.puzzleIndex,
                        size: values.size,
                       });
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <p>Level</p>
                        <input
                          type="text"
                          name="level"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.level}
                        />
                         <p>Puzzle Index</p>
                        <input
                          type="text"
                          name="puzzleIndex"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.puzzleIndex}
                        />
                         <p>Size</p>
                        <input
                          type="text"
                          name="size"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.size}
                        />
                       
                        <p>Answers</p>
                        <input
                          type="text-area"
                          name="answers"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.answers}
                        />
                        <p>Difficulty</p>
                        <input
                          type="text"
                          name="difficulty"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.difficulty}
                        />
                       
                        <button type="submit" disabled={isSubmitting}>
                          Submit
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" md="6">
          <Card>
            <CardHeader>OUTPUT JSON</CardHeader>
            <CardBody>
            <Col xs="12" md="9">
            <PuzzleGeneration level={this.state.level} 
            answers={this.state.answers} 
            difficulty={this.state.difficulty} 
            size ={this.state.size}
            puzzleIndex ={this.state.puzzleIndex}
            />
                    </Col>
            </CardBody>
            <CardFooter />
          </Card>
        </Col>
         
        </Row>
      </div>
    );
  }
}

export default PuzzleGenerator;
