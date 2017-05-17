import React from 'react';
import { Link } from 'react-router-dom';

import LoginModalContainer from '../session/login_modal_container';
import SignupModal from '../session/signup_modal';

const Header = () => (
  <div className='header'>
    <div className='header-item'>
      <LoginModalContainer />
    </div>

    <div className='header-item'>
      <SignupModal />
    </div>
  </div>
);

export default Header;
