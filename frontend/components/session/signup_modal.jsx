import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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
        <button onClick={this.handleOpenModal}>Signup</button>
        <Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           onRequestClose={this.handleCloseModal}
        >

        <SignupFormContainer />
          <button onClick={this.handleCloseModal}>submit</button>
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
