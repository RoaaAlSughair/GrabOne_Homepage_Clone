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
          <Card.Subtitle>
            {item.Provider ? item.Provider : <br />}
          </Card.Subtitle>
          <Card.Text>{item.City ? item.City : <br />}</Card.Text>
          {item.button ? <Button>View collection</Button> : null}
        </Card.Body>
        <Card.Footer>{item.price ? item.price + "$" : <br />}</Card.Footer>
      </Card>
    </div>
  );
}
