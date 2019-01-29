import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout'
import CarFilter from './containers/CarFilter/CarFilter'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout';

class App extends Component<{ children: any, isAuth: any }> {
  componentDidMount() {
    console.log('Hello in AV!');
  }
  
  render() {
    const routes = (
      <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={CarFilter} />
      </Switch>
    );

    return (
      <Layout isAuth>
        {routes}         
      </Layout>
    );
  }
}

export default App;
