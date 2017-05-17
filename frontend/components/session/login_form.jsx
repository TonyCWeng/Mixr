import React from 'react';

class LoginForm extends React.Component {
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
    this.props.login(user).then( () => this.props.closeModal()) ;
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

      <div className="session-form">
        <form onSubmit={this.handleSubmit} className="session-form">
          {this.renderErrors()}

          <div className="form-item">
            <label for="email">Username:
              <input id="email"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="session-input"
              />
            </label>
          </div>

          <div className="form-item">
            <label for="password">Password:
              <input id="password"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </label>
          </div>
            <input className="button" type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}


export default LoginForm;
