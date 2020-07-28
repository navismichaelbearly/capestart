import React, {useEffect} from "react";
import {connect} from "react-redux";

import List from "../../components/List";
import {getAuthors as getAuthorsActionCreator} from "../../thunks";

const Books = ({authors, getAuthors}) => {
  useEffect(() => {
    getAuthors();
  }, [getAuthors]);

  return <List items={authors} type="authors" />;
};

const mapStateToProps = state => ({
  authors: state.authors.list
});

const mapDispatchToProps = dispatch => ({
  getAuthors: () => dispatch(getAuthorsActionCreator())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
