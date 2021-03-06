import React, { Component } from "react";
import "./signup.component.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;

    // axios example
    // axios.post("/", { fname, lname, email, password }).then((result) => {});

    // localStorage TODO
    // localStorage.setItem("user", "");
  };

  render() {
    const { fname, lname, email, password } = this.state;
    return (
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col xs={10}>
            <br></br>
            <Form className="signupPage" onSubmit={this.handleSubmit}>
              <h1 className="center">Sign Up</h1>
              <hr></hr>
              <br></br>

              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  name="fname"
                  value={fname}
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  name="lname"
                  value={lname}
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Button variant="primary" className="btn-block" type="submit">
                Submit
              </Button>
              <br></br>
              <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
              </p>
              <br></br>
            </Form>
          </Col>
          <Col xs={1}></Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}
