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
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiChevronDown,
} from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import "./DoubleNavbar.css";

export default function DoubleNavbar() {
  return (
    <nav>
      {/* Blue nav */}
      <Navbar className="First-nav" variant="dark" expand="lg">
        <Container className="container">
          <Container className="container brand-container">
            {/* Logo */}
            <Navbar.Brand className="brand" href="#home">
              GrabOne
            </Navbar.Brand>
            {/* Links and dropdown lists */}
          </Container>
          <Container className="all-sans-logo">
            <Nav as="ul" className="nav-links">
              {/* Dropdown 1 */}
              <Nav.Item>
                <NavDropdown
                  title={
                    <div className="dropdown-nav-link">
                      <HiOutlineLocationMarker></HiOutlineLocationMarker>
                      <p className="dropdown-title">Auckland</p>
                      <HiChevronDown></HiChevronDown>
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
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
              </Nav.Item>
              {/* Link 1 */}
              <Nav.Item>
                <Nav.Link href="#home">
                  <FiHeart></FiHeart>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">
                  <FiShoppingCart></FiShoppingCart>
                </Nav.Link>
              </Nav.Item>
              {/* Dropdown 2 */}
              <Nav.Item>
                <NavDropdown
                  title={
                    <div>
                      <BsPerson></BsPerson>
                      <HiChevronDown></HiChevronDown>
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    My Account
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Gifts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    My Subscriptions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    My Purchases
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Login</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              {/* Link 2 */}
              <Nav.Item>
                <Nav.Link href="#link">
                  <div className="dropdown-nav-link">
                    <HiOutlineMail></HiOutlineMail>
                    <p className="dropdown-title">Subscribe</p>
                  </div>
                </Nav.Link>
              </Nav.Item>
              {/* Powered by NZ ME logo */}
              <Container className="second-brand">
                <img src="https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png" />
              </Container>
            </Nav>
          </Container>
        </Container>
      </Navbar>
      {/* White nav */}
      <Nav as="ul" className="Second-nav">
        <Nav.Item>
          {/* This dropdown needs lots of dynamic rendering plus using nested dropdown lists */}
          <NavDropdown
            title={
              <div>
                Browse Categories <HiChevronDown></HiChevronDown>
              </div>
            }
            id="nav-dropdown"
          >
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        {/* Links */}
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
        {/* Search bar */}
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
