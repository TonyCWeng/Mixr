import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { style } from './modal_style';

import LoginFormContainer from './login_form_container';

class LoginModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <button
            className="session-button"
            onClick={ this.props.logout }
            >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="session-button"
            onClick={this.handleOpenModal}
          >
            Login
          </button>

          <Modal key='login'
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

export default LoginModal;
