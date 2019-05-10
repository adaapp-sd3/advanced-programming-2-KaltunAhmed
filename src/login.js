import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class login extends React.Component {
  render() {
    return (
      <div className="LoginBody">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="inputEmail">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail1"
              placeholder="enter email"
            />
          </div>
          <div className="form-group">
            <label for="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="enter password"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default login;
