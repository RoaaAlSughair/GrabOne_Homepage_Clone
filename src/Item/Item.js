import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Item(props) {
  const { item } = props;

  return (
    <div className="">
      <Card>
        <Card.Img variant="top" src={item.Image} />
        <Card.Body>
          <Card.Title>{item.Title}</Card.Title>
          <Card.Subtitle>{item.Provider || " "}</Card.Subtitle>
          <Card.Text>{item.City || " "}</Card.Text>
          {item.button ? <Button>View collection</Button> : null}
        </Card.Body>
        <Card.Footer>{item.price + "$"}</Card.Footer>
      </Card>
    </div>
  );
}
