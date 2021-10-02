import React from "react";
import Section from "../Section/Section";

export default function Main(props) {
  const { categories, items } = props;

  return (
    <main>
      {categories.map((elem) => {
        return <Section category={elem} items={items} />;
      })}
    </main>
  );
}
