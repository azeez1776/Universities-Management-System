import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';

import './App.css';
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Explore from './components/Explore'
import Nav from './components/Nav';
import Add from './components/Add';
import Loader from './components/Loader';

const preloader = () => (
  <h2>Loading ....</h2>
);

const TITLE = "UMS";

function App() {

  const loading = () => <Loader />

  return (
    <div className="App">
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <HashRouter>
          <Nav />
          <Suspense fallback={preloader}>
            <Switch>
              <Route
                exact
                path="/"
                name="login"
                render={(props) => <Login {...props} />}
              />
              <Route
                exact
                path="/explore"
                name="Explore"
                render={(props) => <Explore {...props} />}
              />
              <Route
                exact
                path="/add"
                name="Add"
                render={(props) => <Add {...props} />}
              />
            </Switch>
          </Suspense>
        </HashRouter>
      </>
    </div>
  );
}

export default App;
