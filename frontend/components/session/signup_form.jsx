import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render () {
    return (

        <form onSubmit={this.handleSubmit} className="session-form">
          {this.renderErrors()}
          <div className="form-item">
            <label for="username">Username: </label>
              <input id="username"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="session-input"
              />

          </div>

          <div className="form-item">
            <label for="email">Email: </label>
              <input id="email"
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="session-input"
              />
            </div>

            <div className="form-item">
            <label for="password">Password: </label>
              <input id="password"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </div>

            <input className="button" type="submit" value="Submit" />

        </form>
    );
  }
}


export default SignupForm;
