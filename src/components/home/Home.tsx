import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../userContext';

export interface IHomeProps {
}

export interface IHomeState {
  isLoggedOut: boolean;
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      isLoggedOut: false
    }
  }

  logout = () => {
    let newState = { ...this.state };
    newState.isLoggedOut = true;
    this.setState(newState);
  }

  public render() {
    const { isLoggedOut } = this.state;

    if (isLoggedOut) {
      return <Redirect to='/' />
    }

    return (
      <UserContext.Consumer>
        {(context) => (
          <div>
            <button className="btn btn-secondary" onClick={this.logout}>Logout</button>
            <h1>{context.user}</h1>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
