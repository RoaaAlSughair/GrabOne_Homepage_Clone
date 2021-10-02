import React from "react";
import { Link } from "react-router-dom";
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";
import { HiOutlineMail } from "react-icons/hi";
import "./HeroSection.css";

export default function HeroSection(props) {
  const { categories } = props;
  return (
    <div>
      {/* Spring banner */}
      <div className="banner">
        <Link className="to-spring-collection">
          <img
            className="banner-image"
            src="https://mediacdn.grabone.co.nz/asset/yDjZTGuDg1"
          />
        </Link>
        {/* Announcement / Light Alert */}
        <div className="announcement">
          <p>
            <span className="update">Covid 19 Update:</span> We encourage you to
            shop as normal for all your products but shipping delays may occur.
            Stay safe NZ!
          </p>
        </div>
      </div>
      {/* Sidebar (incomplete) */}
      <div className="initial-display">
        <aside className="sidebar">
          <div className="sidebar-title">Discover</div>
          <div className="sidebar-categories">
          <ul className="side-categories">
            {categories.map((elem, i) => {
              return <li className="side-category" key={i}>{elem}</li>
            })}
          </ul>
          </div>
        </aside>
        <Card key={1}>
        <Card.Img variant="top" src= "https://main-cdn.grabone.co.nz/goimage/fullsize/d3162da6dbd501bca97675ef50ed44b23cffd04f.jpg" />
        <Card.Body>
          <Card.Title className="card-title"><h3 className="small-card-title">Inclusive Hanmer Springs Gateway</h3></Card.Title>
          <Card.Subtitle>
          <h4 className="card-provider">Hanmer Springs Hotel</h4>
          </Card.Subtitle>
          <Card.Text><h4 className="card-city">Christchurch</h4></Card.Text>
        </Card.Body>
        <Card.Footer>420$</Card.Footer>
      </Card>
      <Card key={2}>
        <Card.Img variant="top" src= "https://main-cdn.grabone.co.nz/goimage/fullsize/32286725841603f9c33fc6257a8b797d24738be8.jpg" />
        <Card.Body>
          <Card.Title className="card-title"><h3 className="small-card-title">Mesh Reusable Face Mask</h3></Card.Title>
          <Card.Subtitle>
          <br />
          </Card.Subtitle>
          <Card.Text><br /></Card.Text>
        </Card.Body>
        <Card.Footer>9$</Card.Footer>
      </Card>
      </div>
      <div className="subscribe">
      <p className="order-to-subscribe">Get the best deals delivered direct to your inbox each day</p>
      <InputGroup className="Newsletter">
            <InputGroup.Text id="basic-addon1">
            <HiOutlineMail className="subscribe-by-email-icon"></HiOutlineMail>
            </InputGroup.Text>
              <FormControl
                placeholder="Enter email address"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
              />
              <Button id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
      </div>
    </div>
  );
}
