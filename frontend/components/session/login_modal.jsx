import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';
import { style } from './session_style';

import LoginFormContainer from './login_form_container';

class LoginModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
    this.props.clearErrors();
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout()
              .then( () => this.props.history.push('/'));
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <button
            className="btn header-button"
            onClick={ this.handleLogout }
            >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="btn header-button"
            onClick={this.handleOpenModal}
          >
            Login
          </button>

          <Modal
            closeTimeoutMS={300}
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            onRequestClose={this.handleCloseModal}
            style={style}
          >

          <LoginFormContainer closeModal={this.handleCloseModal} />
          </Modal>

        </div>
      );
    }
  }
}

export default withRouter(LoginModal);
