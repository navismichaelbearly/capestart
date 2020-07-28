import React, {useEffect} from "react";
import {connect} from "react-redux";
import Button from "../../components/Button";

import BookCard from "../../components/Card/BookCard";
import {retrieveBook} from "../../thunks";
import "./style.css";

const Book = ({
  book,
  retrieveBookById,
  match: {
    params: {bookId}
  },
  history: {goBack}
}) => {
  useEffect(() => {
    retrieveBookById(bookId);
  }, [bookId, retrieveBookById]);

  return (
    <div className="book-container">
      <Button onClick={goBack}>Go Back</Button>
      <BookCard
        item={book}
        hasToTruncateDescription={false}
        hasToShowSeeMoreButton={false}
        hasToShowExcerpt
      />
    </div>
  );
};

const mapStateToProps = state => ({
  book: state.books.bookSelected
});

const mapDispatchToProps = dispatch => ({
  retrieveBookById: id => dispatch(retrieveBook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
