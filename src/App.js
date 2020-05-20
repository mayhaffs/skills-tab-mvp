import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="">skills-tab</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="">Home</Nav.Link>
        <Nav.Link href="">Features</Nav.Link>
        <Nav.Link href="">Pricing</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="">Login</Nav.Link>
        <Nav.Link href="">Register</Nav.Link>
      </Nav>
    </Navbar>
  );
}

function LandingPage() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Jumbotron className="jumbotron">
            <h1>Hello, Azeroth!</h1>
            <br></br>
            <p>Be the hero you've always wanted to be.</p>
            <p>Grow your skills with skills-tab.</p>
            <br></br>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
    </div>
  );
}

export default App;
