import * as React from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../../services/authService';

export interface ILoginProps {
}

export interface ILoginState {
  username: string;
  password: string;
  isLoggedIn: boolean;

  [key: string]: ILoginState[keyof ILoginState];
}

export default class Login extends React.Component<ILoginProps, ILoginState> {

  authService: AuthService;

  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    }

    this.authService = new AuthService();
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newState = { ...this.state };
    newState[event.currentTarget.name] = event.currentTarget.value
    this.setState(newState);
  }

  login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = await this.authService.login(this.state.username, this.state.password);
    if (token) {
      let newState = { ...this.state };
      newState.isLoggedIn = true;
      this.setState(newState);
    }
  }

  public render() {
    const {isLoggedIn} = this.state;

    if (isLoggedIn) {
      return <Redirect to='/home' />
    }

    return (
      <div className="container min-vh-100">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <form className="col-lg-3 col-sm-4 col-8 mx-auto" onSubmit={this.login}>
            <div className="form-group">
              <label className="w-100">Username
                  <input type="text" className="form-control" name="username" onChange={this.handleChange}/>
              </label>
            </div>
            <div className="form-group">
              <label className="w-100">Password
                  <input type="password" className="form-control" name="password" onChange={this.handleChange}/>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
    );
  }
}
