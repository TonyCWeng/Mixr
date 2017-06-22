import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import LoginModalContainer from '../session/login_modal_container';
import SignupModalContainer from '../session/signup_modal_container';
import DemoContainer from '../session/demo_container';

class Header extends React.Component {
  constructor(props) {
    super(props);

  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/dashboard');
  }

  render() {
  return (
    <div className='header'>
      <div onClick={this.handleClick} className='header-left'>
        <font className="left-text" size="10">M</font>
      </div>

      <div className='header-right'>
        <div className='header-item'>
          <LoginModalContainer />
        </div>

        <div className='header-item'>
          <SignupModalContainer />
        </div>

        <div className='header-item'>
          <DemoContainer />
        </div>

      </div>

    </div>
    );
  }
}

export default withRouter(Header);
