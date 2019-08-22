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
import { UserContext } from './userContext';

export interface IAppState {
  user: string;
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: ''
    }
  }

  updateUser = (user: string) => {
    let newState = { ...this.state };
    newState.user = user;
    this.setState(newState);
  }

  public render() {
    return (
      <UserContext.Provider value={this.state}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route exact path="/login" render={(props) => <Login {...props} updateUser={this.updateUser}/>} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Router>
      </UserContext.Provider>
    );
  }
}
