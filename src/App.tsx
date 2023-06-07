import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/common/Layout/Layout';
import ErrorPage from './error-page';
import Home from './pages/Home';
import Reservations from './pages/Reservations';

function App(): React.ReactElement {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reservations" component={Reservations} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
