import React, { Component } from "react";
import axios from "axios";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      msg: "",
      info: false,
      success: false
    };
    this.toggleInfo = this.toggleInfo.bind(this);
    this.toggleSucc = this.toggleSucc.bind(this);
    this.confirmTosuccess = this.confirmTosuccess.bind(this);
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info
    });
  }

  toggleSucc() {
    this.setState({
      success: !this.state.success
    });
  }
  confirmTosuccess() {
    this.toggleSucc();
    this.props.history.push("/login");
  }
  handleChange = prop => event => {
    console.log("this called");
    this.setState({ [prop]: event.target.value });
  };
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post("/api/auth/register", { username, password }).then(result => {
      //console.log(result.data);
      if (result.data.success) {
        // if create successful
        this.setState({ msg: result.data.msg });
        this.toggleSucc();
        //this.props.history.push("/login");
      } else {
        //alert(result.data.msg + " Please change the username and try again.");
        this.setState({
          msg: result.data.msg + " Please change the username and try again."
        });
        this.toggleInfo();
      }
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        value={username}
                        onChange={this.handleChange("username")}
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        value={password}
                        onChange={this.handleChange("password")}
                        required
                      />
                    </InputGroup>
                    {/*<InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" /></InputGroup>
                      */}
                    <Button color="success" block type="submit">
                      Create Account
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal
          isOpen={this.state.info}
          toggle={this.toggleInfo}
          className={"modal-info " + this.props.className}
        >
          <ModalHeader toggle={this.toggleInfo}>Warning!</ModalHeader>
          <ModalBody>{this.state.msg}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleInfo}>
              confirm
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.success}
          toggle={this.toggleSucc}
          className={"modal-info " + this.props.className}
        >
          <ModalHeader toggle={this.toggleSucc}>Congratulations!</ModalHeader>
          <ModalBody>{this.state.msg}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.confirmTosuccess}>
              confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Register;
