import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CreateCategory from "../CreateCategory/CreateCategory";

const NavBar = () => {
  const [array, setArray] = useState([]);
  const updateArray = (newElement) => {
    console.log(newElement);
    if (Array.isArray(array)) {
      setArray([...array, newElement]);
    } else {
      setArray([newElement]);
    }
    console.log(array);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src="logo.6a2d08bb.png" style={{ width: "10rem" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="Constancias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {array.length > 0 && (
                <>
                  {array.map((element, index) => (
                    <NavDropdown
                      key={index}
                      title={element.title}
                    ></NavDropdown>
                  ))}
                </>
              )}
              <Nav.Item>
                <CreateCategory updateArray={updateArray} />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
