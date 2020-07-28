import React, {useEffect} from "react";
import {connect} from "react-redux";
import authorImg from "../../img/author.jpg";
import BookCard from "../../components/Card/BookCard";
import {retrieveAuthor} from "../../thunks";
import "./style.css";

const Author = ({
  author,
  authorBook,
  retrieveAuthorById,
  match: {
    params: {authorId}
  }
}) => {
  useEffect(() => {
    retrieveAuthorById(authorId);
  }, [authorId, retrieveAuthorById]);
  const {FirstName, LastName} = author;

  return (
    <div className="author-container">
      <div className="author-column">
        <img className="author-img" src={authorImg} alt="img" />
        <h1>{`${FirstName} ${LastName}`}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
          ea commodi consequat.
        </p>
      </div>
      <div className="author-book">
        {authorBook && <BookCard className="author-card" item={authorBook} />}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  author: state.authors.authorSelected,
  authorBook:
    state.books.list &&
    state.books.list.length > 0 &&
    state.books.list.find(({ID}) => state.authors.authorSelected.IDBook === ID)
});

const mapDispatchToProps = dispatch => ({
  retrieveAuthorById: id => dispatch(retrieveAuthor(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Author);
