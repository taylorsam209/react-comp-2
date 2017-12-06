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
      <Route path='/dummypage' render={()=><h1> You found me. I am not a real page, but congrats! Return to main page by entering regular domain.</h1>} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
