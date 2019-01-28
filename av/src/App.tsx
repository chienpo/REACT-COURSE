import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components'

import CarFilter from './containers/CarFilter/CarFilter'
import Auth from './containers/Auth/Auth'

const Layout = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  componentDidMount() {
    console.log('Hello in AV!');
  }
  
  render() {
    const routes = (
      <Switch>
        <Route path="/" exact component={CarFilter} />
        <Route path="/auth" component={Auth} />
      </Switch>
    );

    return (
      <Layout>
        {routes}         
      </Layout>
    );
  }
}

export default App;
