import * as actionTypes from "../actions/types";

const initialState = {
  list: [],
  authorSelected: {},
  isLoading: false,
  error: null
};

export default function authorsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_GET_AUTHOR:
    case actionTypes.START_GET_AUTHORS:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FAIL_GET_AUTHOR:
    case actionTypes.FAIL_GET_AUTHORS:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actionTypes.SUCCESS_GET_AUTHOR:
      return {
        ...state,
        authorSelected: action.payload,
        isLoading: false
      };
    case actionTypes.SUCCESS_GET_AUTHORS:
      return {
        ...state,
        list: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
