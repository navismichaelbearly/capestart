import {combineReducers} from "redux";
import authors from "./authors";
import books from "./books";

export default combineReducers({
  authors,
  books
});
