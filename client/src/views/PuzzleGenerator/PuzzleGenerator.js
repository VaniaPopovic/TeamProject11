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
     difficulty:""
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
                  <h1>Anywhere in your app!</h1>
                  <Formik
                    initialValues={{ level: "", answers: "", difficulty: "", }}
                    onSubmit={(values, { setSubmitting }) => {
                      console.log(values);
                      setTimeout(() => {
                        var Ar = values.answers.split(',');
                       this.setState({
                         level: values.level,
                        difficulty: values.difficulty,
                        answers: Ar
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
            <PuzzleGeneration level={this.state.level} answers={this.state.answers} difficulty={this.state.difficulty} />
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
