import * as React from 'react';
import { Redirect } from 'react-router-dom';

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
      <div>
        <button className="btn btn-secondary" onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
