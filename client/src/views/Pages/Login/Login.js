import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: "",
      info: false
    };
    this.toggleInfo = this.toggleInfo.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleInfo() {
    this.setState({
      info: !this.state.info
    });
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    console.log({ username, password });
    axios
      .post("/api/auth/login", { username, password })
      .then(result => {
        localStorage.setItem("jwtToken", result.data.token);
        this.setState({ message: "" });
        this.props.history.push("/home");
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({
            message: "Login failed！ Username or password does not match."
          });
          this.toggleInfo();
        }
      });
  };

  render() {
    //const { username, password, message } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          value={this.state.username}
                          onChange={this.handleChange("username")}
                          required
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          value={this.state.password}
                          onChange={this.handleChange("password")}
                          autoComplete="current-password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            onClick={this.onSubmit}
                            className="px-4"
                          >
                            Login
                          </Button>
                        </Col>
                        {/*
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                        */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Welcome to Word Games, if you did not have an account,
                        please register below.
                      </p>
                      <Link to="/register">
                        <Button
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>

        <Modal
          isOpen={this.state.info}
          toggle={this.toggleInfo}
          className={"modal-info " + this.props.className}
        >
          <ModalHeader toggle={this.toggleInfo}>Warning!</ModalHeader>
          <ModalBody>{this.state.message}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleInfo}>
              confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;
