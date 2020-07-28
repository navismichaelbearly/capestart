import React from "react";
import author from "../../img/author.jpg";
import {Link} from "react-router-dom";
import Button from "../Button";
import "./style.css";

const AuthorCard = ({item}) => {
  const {FirstName, LastName} = item;
  return (
    <div className="card-container">
      <img className="card-img" src={author} alt="img" />
      <p>
        {FirstName} {LastName}
      </p>
      <Link to={`/authors/${item.ID}`}>
        <Button type="button">See more</Button>
      </Link>
    </div>
  );
};

export default AuthorCard;
