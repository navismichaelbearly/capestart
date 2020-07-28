import React from "react";
import Card from "../Card";
import "./style.css";

const List = ({items, type}) => (
  <div className="list-container">
    {items.length > 0 &&
      items.map((item, key) => <Card item={item} type={type} key={key} />)}
  </div>
);

export default List;
