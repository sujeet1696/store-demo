import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fruit from './Fruit';
import Vegitable from './Vegitable';
import Drink from './Drink';

function Data() {
  return (
    <Router>
      <div>
        <div class="row">
          <button type="button"><Link to="/fruits">Fruits</Link></button>
          <button type="button"><Link to="/vegitables">Vegitables</Link></button>
          <button type="button"><Link to="/drinks">Drinks</Link></button>
        </div>


        <Route path="/fruits" component={Fruit} />
        <Route path="/vegitables" component={Vegitable} />
        <Route path="/drinks" component={Drink} />
      </div>
    </Router>
  );
}

export default Data;
