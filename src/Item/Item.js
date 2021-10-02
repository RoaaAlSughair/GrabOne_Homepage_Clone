import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Item.css";

export default function Item(props) {
  const { item } = props;

  return (
      <Card key={item.id}>
        <Card.Img variant="top" src={item.Image} />
        <Card.Body>
          <Card.Title className="card-title"><h3 className="small-card-title">{item.Title}</h3></Card.Title>
          <Card.Subtitle>
            {item.Provider ? <h4 className="card-provider">{item.Provider}</h4> : <br />}
          </Card.Subtitle>
          <Card.Text>{item.City ? <h4 className="card-city">{item.City}</h4> : <br />}</Card.Text>
          {item.button ? <Button>View collection</Button> : null}
        </Card.Body>
        <Card.Footer>{item.price ? item.price + "$" : <br />}</Card.Footer>
      </Card>
  );
}
