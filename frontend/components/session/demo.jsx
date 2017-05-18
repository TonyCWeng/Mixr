import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Guest',
      password: 'password'
    };

    this.demo = this.demo.bind(this);
  }

  demo(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    if (!this.props.currentUser) {
      return (
        <div>
          <button
            className="btn header-button"
            onClick={ this.demo }
            >
            Guest
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Demo;
