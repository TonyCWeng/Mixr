import React from 'react';
import { Link } from 'react-router-dom';

import LoginModalContainer from '../session/login_modal_container';
import SignupModalContainer from '../session/signup_modal_container';
import DemoContainer from '../session/demo_container';

const Header = () => (
  <div className='header'>
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
);

export default Header;
