import React from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Books from "./containers/Books";
import Book from "./containers/Book";
import Authors from "./containers/Authors";
import Author from "./containers/Author";
import Header from "./components/Header";
import Loader from "./components/Loader";

const App = ({isLoading}) => (
  <Router>
    <Header />
    {isLoading && <Loader />}
    <Route path="/" exact component={Books} />
    <Route path="/books/:bookId/" component={Book} />
    <Route path="/authors" exact component={Authors} />
    <Route path="/authors/:authorId/" component={Author} />
  </Router>
);

const mapStateToProps = state => ({
  isLoading: state.books.isLoading || state.authors.isLoading
});

export default connect(mapStateToProps)(App);
