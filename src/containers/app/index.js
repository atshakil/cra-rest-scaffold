import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard';
import NotFound from '../not_found';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
