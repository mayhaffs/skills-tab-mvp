import React, { Component } from "react";
import "./login.component.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={2}></Col>
          <Col xs={8}>
            <br></br>
            <Form className="loginPage">
              <h1 className="center">Sign In</h1>
              <hr></hr>
              <br></br>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  {/* We'll never share your email with anyone else. */}
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <Button variant="primary" className="btn-block" type="submit">
                Submit
              </Button>
              <br></br>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </Form>
          </Col>
          <Col xs={2}></Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}
