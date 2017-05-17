import React from 'react';
import LoginModalContainer from '../session/login_modal_container';
import SignupModal from '../session/signup_modal';

// class Auth extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render () {
//     if (this.props.currentUser) {
//       return (
//         <div className='auth'>
//           <button
//             className="button"
//             onClick={ this.props.logout }
//             >
//             Logout
//           </button>
//         </div>
//       );
//     } else {
//       return (
//         <div className='auth'>
//           <LoginModal />
//           <SignupModal />
//         </div>
//       );
//     }
//   }
// }

const Auth = () => (
  <div>
    <LoginModalContainer />
    <SignupModal />
  </div>
);

export default Auth;
