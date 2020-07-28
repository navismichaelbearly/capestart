import React, {useEffect} from "react";
import {connect} from "react-redux";

import List from "../../components/List";
import {getBooks as getBooksActionCreator} from "../../thunks";

const Books = ({books, getBooks}) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return <List items={books} type="books" />;
};

const mapStateToProps = state => ({
  books: state.books.list
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooksActionCreator())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
