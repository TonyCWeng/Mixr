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
      post_type: 'quote'
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
    this.setState({
      showModal: false,
      author_id: '',
      title: '',
      body: '',
      source: '',
    });
  }

  handleSubmit () {
    const post = {
      author_id: this.state.author_id,
      title: `"${this.state.title}"`,
      body: `—${this.state.body}`,
      source: this.state.source,
      post_type: 'quote'
    };
    this.props.createPost({post})
              .then(this.handleCloseModal());
  }

  render () {
    return (
      <div className="test">
        <button
          className="post-btn"
          onClick={this.handleOpenModal}
        >
          <label className="btn-content">
            <section className="icon quote-icon post-hover">
            </section>
            <span className="btn-label">Quote</span>
          </label>
        </button>

        <Modal
          closeTimeoutMS={300}
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          style={style}
        >

        <div className="blur">
          <div className="post-form">

            <div className="primary-field">
              <span className="poster">{this.props.currentUser.username}</span>

              <textarea className="primary-input"
                type="text"
                placeholder='"Quote"'
                value={this.state.title}
                onChange={this.update('title')}
              />
            </div>

            <div className="post-field">
              <textarea className="post-input"
                type="text"
                placeholder="— Source"
                value={this.state.body}
                onChange={this.update('body')}
              />
            </div>

            <div className="submission">
              <div className='modal-button'>
                <button className="btn form-button" onClick={this.handleCloseModal}>
                  Close
                </button>

                <button className="btn submit-button"
                  onClick={this.handleSubmit}
                  disabled={!this.state.title}
                >
                  Post
                </button>
              </div>
            </div>

          </div>
        </div>


        </Modal>
      </div>
    );
  }
}

export default PostFormContainer(QuoteForm);
