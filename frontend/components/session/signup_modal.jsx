import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { style } from './modal_style';

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
  }

  render () {
    return (
      <div>
        <button className="button" onClick={this.handleOpenModal}>Signup</button>
        <Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           onRequestClose={this.handleCloseModal}
           style={style}
        >

        <SignupFormContainer />
          <button className="button" onClick={this.handleCloseModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
