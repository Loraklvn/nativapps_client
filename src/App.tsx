import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/common/Layout/Layout';
import ErrorPage from './error-page';
import Home from './pages/Home';

function App(): React.ReactElement {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
