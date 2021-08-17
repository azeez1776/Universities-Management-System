import React, { Suspense, useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { LoginContext } from './Helper/Context'
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
  const [loggedIn, setLoggedIn] = useState(false);

  const loading = () => <Loader />

  return (
    <div className="App">
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }} >
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
      </LoginContext.Provider>
    </div>
  );
}

export default App;
