import React from "react";
import { Button } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import Item from "../Item/Item";
import "./Section.css";

export default function Section(props) {
  const { category, items } = props;
  return (
    <section>
      <div className="category">
      <h3>{category}</h3>
      <Button variant="outline-secondary" id="button-addon2">
        View more <BiChevronRight></BiChevronRight>
      </Button>
      </div>
      <div className="category-items">
      {items
        .filter((elem) => {
          return elem.Category === category;
        })
        .map((elem) => {
          return <Item item={elem} />;
        })}
        </div>
    </section>
  );
}
