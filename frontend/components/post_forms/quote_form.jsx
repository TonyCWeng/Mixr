import React from 'react';
import Modal from 'react-modal';
import { style } from '../session/modal_style';
import PostFormContainer from './post_form_container';


class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      author_id: props.currentUser.id,
      title: '',
      body: '',
      source: '',
      file_type: ''
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleSubmit () {
    const post = {
      author_id: this.state.author_id,
      title: `"${this.state.title}"`,
      body: `—${this.state.body}`,
      source: this.state.source,
      file_type: this.state.title
    };
    this.props.createPost({post})
              .then(this.handleCloseModal());
  }

  render () {
    return (
      <div>
        <button
          className="btn header-button"
          onClick={this.handleOpenModal}
        >
          Quote
        </button>

        <Modal
          closeTimeoutMS={300}
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          style={style}
        >

        <div>
          <div className="post-form">

            <div className="post-field">
              <input className="post-input"
                type="text"
                placeholder='"Quote"'
                value={this.state.title}
                onChange={this.update('title')}
              />
            </div>

            <div className="post-field">
              <input className="post-input"
                type="text"
                placeholder="Source"
                value={this.state.body}
                onChange={this.update('body')}
              />
            </div>

          </div>
        </div>

        <div className="submission">
        <div className='btn modal-button'>
          <button className="btn form-button" onClick={this.handleCloseModal}>
            Close
          </button>

          <button className="btn form-button" onClick={this.handleSubmit}>
            Post
          </button>
        </div>
        </div>


        </Modal>
      </div>
    );
  }
}

export default PostFormContainer(QuoteForm);
