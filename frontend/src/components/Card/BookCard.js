import React from "react";
import {Link} from "react-router-dom";
import book from "../../img/book-cover.jpg";
import {parseDate} from "../../helpers/date";
import Button from "../Button";
import "./style.css";

const BookCard = ({
  className,
  item,
  hasToTruncateDescription = true,
  hasToShowSeeMoreButton = true,
  hasToShowExcerpt = false
}) => {
  const {PageCount, Title, PublishDate, Description, Excerpt} = item;
  const dateParsed = parseDate(new Date(PublishDate));
  const descriptionTrucanted =
    Description && Description.length > 250 && hasToTruncateDescription
      ? `${Description.substring(0, 250)}...`
      : Description;

  return (
    <div className={"card-container " + className}>
      <h3>{Title}</h3>
      <img className="card-img" src={book} alt="img" />
      <p>{descriptionTrucanted}</p>
      <p>Published: {dateParsed}</p>
      <p>Pages: {PageCount}</p>
      {hasToShowExcerpt && (
        <p>
          <b>Excerpt:</b> {Excerpt}
        </p>
      )}
      {hasToShowSeeMoreButton && (
        <Link to={`/books/${item.ID}`}>
          <Button type="button">See more</Button>
        </Link>
      )}
    </div>
  );
};

export default BookCard;
