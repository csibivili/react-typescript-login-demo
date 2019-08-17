import * as React from 'react';

export interface ILoginProps {
}

export default class Login extends React.Component<ILoginProps> {
  public render() {
    return (
      <div className="container min-vh-100">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <form className="col-lg-3 col-sm-4 col-8 mx-auto">
            <div className="form-group">
              <label className="w-100">Username
                  <input type="text" className="form-control" />
              </label>
            </div>
            <div className="form-group">
              <label className="w-100">Password
                  <input type="password" className="form-control" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
    );
  }
}
