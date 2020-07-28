import React from "react";
import AuthorCard from "./AuthorCard";
import BookCard from "./BookCard";

const Card = ({type, ...props}) => {
  if (type === "authors") {
    return <AuthorCard {...props} />;
  }
  return <BookCard {...props} />;
};

export default Card;
