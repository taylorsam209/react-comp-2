import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Browse from './components/Browse/Browse'
import Details from './components/Details/Details'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
      <Route component={Browse} path='/' exact/>
      <Route component={Details} path="/details/:name"/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
