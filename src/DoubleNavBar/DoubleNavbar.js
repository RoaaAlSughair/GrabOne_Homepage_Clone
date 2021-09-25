import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import "./DoubleNavbar.css";

export default function DoubleNavbar() {
  return (
    <nav>
      <Navbar className="First-nav" variant="dark" expand="lg">
        <Container className="container">
          <Container className="container brand-container">
            <Navbar.Brand className="brand" href="#home">
              GrabOne
            </Navbar.Brand>
          </Container>
          <Nav>
            <NavDropdown
              title={
                <div className="nav-link">
                  <HiOutlineLocationMarker></HiOutlineLocationMarker>{" "}
                  <span>Auckland</span>
                </div>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">
              <FiHeart></FiHeart>
            </Nav.Link>
            <Nav.Link href="#link">
              <FiShoppingCart></FiShoppingCart>
            </Nav.Link>
            <NavDropdown title={<BsPerson></BsPerson>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                My Subscriptions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                My Purchases
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Login</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
              <div className="nav-link">
                <HiOutlineMail></HiOutlineMail> <span>Subscribe</span>
              </div>
            </Nav.Link>
          </Nav>
          <Container className="second-brand">
            <img src="https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png" />
          </Container>
        </Container>
      </Navbar>
      <Nav defaultActiveKey="#" as="ul" className="Second-nav">
        <Nav.Item>
          {/* This one needs lots of dynamic rendering plus using nested dropdown lists */}
          <NavDropdown title="Browse Categories" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#">What's New</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="javascript:void(0);">Trending</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="javascript:void(0);">For You</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="javascript:void(0);">Shop Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <InputGroup className="Search-bar">
            <InputGroup.Text id="basic-addon1">
              <FiSearch className="search-icon"></FiSearch>
            </InputGroup.Text>
            <FormControl
              placeholder="Search GrabOne"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Nav.Item>
      </Nav>
    </nav>
  );
}
