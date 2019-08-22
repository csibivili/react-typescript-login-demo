import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
