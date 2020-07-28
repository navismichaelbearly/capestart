import * as actionTypes from "../actions/types";

const initialState = {
  list: [],
  bookSelected: {},
  isLoading: false,
  error: null
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_GET_BOOK:
    case actionTypes.START_GET_BOOKS:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FAIL_GET_BOOK:
    case actionTypes.FAIL_GET_BOOKS:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actionTypes.SUCCESS_GET_BOOK:
      return {
        ...state,
        bookSelected: action.payload,
        isLoading: false
      };
    case actionTypes.SUCCESS_GET_BOOKS:
      return {
        ...state,
        list: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
