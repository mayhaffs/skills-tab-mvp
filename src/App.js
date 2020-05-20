import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import fighter from "./images/_fighter.png";
import sorcerer from "./images/_sorcerer.png";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav.Link href="" className="navbarBrand">
        Skills-Tab
      </Nav.Link>
      <Nav className="mr-auto">
        {/* <Nav.Link href="">Home</Nav.Link>
        <Nav.Link href="">Features</Nav.Link>
        <Nav.Link href="">Pricing</Nav.Link> */}
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="">Login</Nav.Link>
        <Nav.Link href="">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
}

function Footer() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="bottom"
      className="justify-content-center"
    >
      <Nav className="justify-content-center">
        <Nav.Link href="">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

// function ImageProfile() {
//   return ;
//   return ;
// }

function LandingPage() {
  return (
    <Container>
      <Row>
        <Col xs={0}></Col>
        <Col xs={12}>
          <Jumbotron className="jumbotron">
            <h1>Skills-Tab</h1>
            <br></br>
            <p>Be the hero you've always wanted to be.</p>
            <p>Grow your skills with Skills-Tab.</p>
          </Jumbotron>
        </Col>
        <Col xs={0}></Col>
      </Row>
      <Row>
        <Col xs={5}>
          <img
            src={sorcerer}
            alt="sorcerer"
            className="landing-images center"
          />
        </Col>
        <Col xs={2}></Col>
        <Col xs={5}>
          <img src={fighter} alt="fighter" className="landing-images center" />
        </Col>
      </Row>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          <p className="center landing-button">
            <Button variant="warning" size="lg">
              Sign Up
            </Button>
          </p>
        </Col>
        <Col xs={3}></Col>
      </Row>
      <br></br>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          <p className="center landing-button">
            <Button variant="warning" size="lg">
              Login
            </Button>
          </p>
        </Col>
        <Col xs={3}></Col>
      </Row>
      <br></br>
    </Container>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
