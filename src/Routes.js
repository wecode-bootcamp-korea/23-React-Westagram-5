import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loginji from './pages/jeongilLee/Login/Login';
import Mainji from './pages/jeongilLee/Main/Main';

import Loginjs from './pages/jisunLee/Login/Login';
import Mainjs from './pages/jisunLee/Main/Main';

import Loginlw from './pages/lownKim/Login/Login';
import Mainlw from './pages/lownKim/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/loginji" component={Loginji} />
          <Route exact path="/mainji" component={Mainji} />

          <Route exact path="/loginjs" component={Loginjs} />
          <Route exact path="/mainjs" component={Mainjs} />

          <Route exact path="/loginlw" component={Loginlw} />
          <Route exact path="/mainlw" component={Mainlw} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
