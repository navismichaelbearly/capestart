import * as api from "../helpers/api";
import * as actionCreators from "../actions/creators";

export const getBooks = () => {
  return async dispatch => {
    try {
      dispatch(actionCreators.startGetBooks());
      const {data: books} = await api.getBooks();
      dispatch(actionCreators.successGetBooks(books));
    } catch (error) {
      dispatch(actionCreators.failGetBooks(error));
    }
  };
};

export const getAuthors = () => {
  return async dispatch => {
    try {
      dispatch(actionCreators.startGetAuthors());
      const {data: authors} = await api.getAuthors();
      dispatch(actionCreators.successGetAuthors(authors));
    } catch (error) {
      dispatch(actionCreators.failGetAuthors(error));
    }
  };
};

export const retrieveBook = id => {
  return async dispatch => {
    try {
      dispatch(actionCreators.startGetBook(id));
      const {data: book} = await api.getBook(id);
      dispatch(actionCreators.successGetBook(book));
    } catch (error) {
      dispatch(actionCreators.failGetBook(error));
    }
  };
};

export const retrieveAuthor = id => {
  return async dispatch => {
    try {
      dispatch(actionCreators.startGetAuthor(id));
      const {data: author} = await api.getAuthor(id);
      dispatch(actionCreators.successGetAuthor(author));
    } catch (error) {
      dispatch(actionCreators.failGetAuthor(error));
    }
  };
};
