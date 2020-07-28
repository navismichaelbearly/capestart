import * as actionTypes from "./types";

// BOOKS
export const startGetBooks = () => ({
  type: actionTypes.START_GET_BOOKS
});

export const successGetBooks = payload => ({
  type: actionTypes.SUCCESS_GET_BOOKS,
  payload
});

export const failGetBooks = payload => ({
  type: actionTypes.FAIL_GET_BOOKS,
  payload
});

export const startGetBook = payload => ({
  type: actionTypes.START_GET_BOOK,
  payload
});

export const failGetBook = payload => ({
  type: actionTypes.FAIL_GET_BOOK,
  payload
});

export const successGetBook = payload => ({
  type: actionTypes.SUCCESS_GET_BOOK,
  payload
});

// AUTHORS
export const startGetAuthors = payload => ({
  type: actionTypes.START_GET_AUTHORS,
  payload
});

export const successGetAuthors = payload => ({
  type: actionTypes.SUCCESS_GET_AUTHORS,
  payload
});

export const failGetAuthors = payload => ({
  type: actionTypes.FAIL_GET_AUTHORS,
  payload
});

export const startGetAuthor = payload => ({
  type: actionTypes.START_GET_AUTHOR,
  payload
});

export const successGetAuthor = payload => ({
  type: actionTypes.SUCCESS_GET_AUTHOR,
  payload
});

export const failGetAuthor = payload => ({
  type: actionTypes.FAIL_GET_AUTHOR,
  payload
});
