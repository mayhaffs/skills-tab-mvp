import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import fighter from "./images/fighter.png";
import sorcerer from "./images/sorcerer.png";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function Footer() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="bottom"
      className="justify-content-center"
    >
      <Nav className="justify-content-center">
        <Nav.Link href="">-- currently under constrution --</Nav.Link>
      </Nav>
    </Navbar>
  );
}

function LandingPage() {
  return (
    // <Router>
    <Container>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <Jumbotron className="jumbotron">
            <h1>Skills-Tab</h1>
            <br></br>
            <p>Be the hero you've always wanted to be.</p>
            <p>Grow your skills with Skills-Tab.</p>
          </Jumbotron>
        </Col>
        <Col xs={1}></Col>
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
      <Row className="landing-button-row">
        <Col xs={3}></Col>
        <Col xs={6}>
          <p className="center landing-button">
            <Link to={"/sign-up"}>
              <Button variant="warning" className="btn" size="lg">
                Sign Up
              </Button>
            </Link>
          </p>
        </Col>
        <Col xs={3}></Col>
      </Row>
      <br></br>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          <p className="center landing-button">
            <NavLink to={"/sign-in"}>
              <Button variant="warning" className="btn" size="lg">
                Login
              </Button>
            </NavLink>
          </p>
          <br></br>
          <br></br>
        </Col>
        <Col xs={3}></Col>
      </Row>
      <br></br>
    </Container>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Navigation />
//       <LandingPage />
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navigation />
//         <LandingPage />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={"/sign-in"}>
//               positronX.io
//             </Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-in"}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-up"}>
//                     Sign up
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Switch>
//               <Route exact path="/" component={Login} />
//               <Route path="/sign-in" component={Login} />
//               <Route path="/sign-up" component={SignUp} />
//             </Switch>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

function Navigation() {
  return (
    <Router basename="/skills-tab-mvp/">
      <Navbar bg="dark" variant="dark">
        <NavLink className="navbarBrand" to={"/"}>
          Skills-Tab
        </NavLink>
        <Nav className="mr-auto">
          {/* <NavLink className="nav-link" to={"/"}>
            Home
          </NavLink>
          <NavLink className="nav-link" to={"/"}>
            Features
          </NavLink>
          <NavLink className="nav-link" to={"/"}>
            Pricing
          </NavLink> */}
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item className="nav-item">
            <NavLink className="nav-link" to={"/sign-in"}>
              Login
            </NavLink>
          </Nav.Item>
          <NavLink className="nav-link" to={"/sign-up"}>
            Sign Up
          </NavLink>
        </Nav>
      </Navbar>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar className="navbar navbar-expand-lg navbar-light fixed-top">
          <Container>
            <Navbar.Brand>
              <Nav.Link className="navbar-brand" to={"/sign-in"}>
                positronX.io
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Collapse
              className="collapse navbar-collapse"
              id="navbarTogglerDemo02"
            >
              <Nav className="navbar-nav ml-auto">
                <Nav.Item className="nav-item">
                  <Nav.Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}

        <Navigation />

        {/* <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
