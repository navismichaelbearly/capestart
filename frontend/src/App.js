import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import Authors from './components/Authors';
import Books from './components/Books';
import Home from './components/Home';


const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%',
};

const App = () => (
  <Router>
    <SplitPane
      split="vertical"
      minSize={100}
      defaultSize={100}
      resizerStyle={styles}
    >
      <menu>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/authors">Authors</Link></div>
        <div><Link to="/books">Books</Link></div>
      </menu>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/authors" component={Authors} />
        <Route path="/books" component={Books} />
      </div>
    </SplitPane>
  </Router>
);

export default App;
