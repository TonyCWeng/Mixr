import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    const user = this.state;
    this.props.clearErrors();
    this.props.signup(user)
              .then( () => this.props.history.push('/dashboard/'))
              .then( () => this.props.closeModal()) ;
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
      <div>

        <div className="session-form">
          {this.renderErrors()}
          <div className="form-item">
            <label >Username: </label>
            <input id="username"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="session-input"
            />

          </div>

          <div className="form-item">
            <label >Email: </label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="session-input"
            />
          </div>

          <div className="form-item">
            <label>Password: </label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="session-input"
            />
          </div>
        </div>

        <div className="submission">
        <div className='btn modal-button'>
          <button className="btn auth-button" onClick={this.props.closeModal}>
            Close
          </button>

          <button className="btn auth-button" onClick={this.handleClick}>
            Submit
          </button>
        </div>
        </div>

      </div>
    );
  }
}


export default SignupForm;
