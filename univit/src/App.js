import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Explore from './components/Explore'
import Nav from './components/Nav';
import Add from './components/Add';


function App() {
  return (

    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/Add" exact>
            <Add />
          </Route>
          <Route path="/Explore" exact>
            <Explore />
          </Route>
          <Route path="/Login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div >


  );
}

export default App;
