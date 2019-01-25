import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import TaskOne from './components/task-one/TaskOne'
import TaskTwo from './components/task-two/TaskTwo'
import Calculator from './containers/Calculator/Calculator'
import Navigation from './components/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Navigation} />
        <Route path='/task-one' component={TaskOne} />
        <Route path='/task-two' component={TaskTwo} />
        <Route path='/calculator' component={Calculator} />
      </div>
    );
  }
}

export default App;
