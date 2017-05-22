import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { style } from './session_style';

import SignupFormContainer from './signup_form_container';

class SignupModal extends React.Component {
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
    this.props.clearErrors();
  }

  render () {
    if (this.props.currentUser) {
      return (
        null
      );
    } else {
      return (
        <div>
          <button
            className="btn header-button"
            onClick={this.handleOpenModal}
          >
            Signup
          </button>

          <Modal
            closeTimeoutMS={300}
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            onRequestClose={this.handleCloseModal}
            style={style}
          >

          <SignupFormContainer closeModal={this.handleCloseModal}/>
          </Modal>
        </div>
      );
    }
  }
}

export default SignupModal;
