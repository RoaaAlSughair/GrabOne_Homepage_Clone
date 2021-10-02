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
import { BiChevronRight } from "react-icons/bi";
import "./DoubleNavbar.css";

export default function DoubleNavbar(props) {
  const { locations, categories } = props;
  return (
    <div>
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
                  {locations.map((elem, i) => {
                    return (
                      <NavDropdown.Item eventKey={i}>{elem}</NavDropdown.Item>
                    );
                  })}
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
                    <div className="dropdown-nav-link">
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
      <Nav className="Second-nav">
        <Nav.Item as="ul" className="all-sans-input-group">
          <Nav.Item as="li">
            {/* This dropdown needs lots of dynamic rendering */}
            <NavDropdown
              title={
                <Nav.Link className="second-nav-links">
                  Browse Categories <HiChevronDown></HiChevronDown>
                </Nav.Link>
              }
            >
              {categories.map((elem, i) => {
                return (
                  <NavDropdown.Item className="dropdown-category" eventKey={i}>
                    {elem} <BiChevronRight></BiChevronRight>
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-category dropdown-last-option"
                eventKey="4.4"
              >
                Browse All Categories
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          {/* Links */}
          <Nav.Item as="li">
            <Nav.Link className="second-nav-links" href="#">
              What's New
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="second-nav-links" href="#">
              Trending
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="second-nav-links" href="#">
              For You
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="second-nav-links" href="#">
              Shop Products
            </Nav.Link>
          </Nav.Item>
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
    </div>
  );
}
