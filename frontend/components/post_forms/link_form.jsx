import React from 'react';
import Modal from 'react-modal';
import { style } from '../session/modal_style';
import PostFormContainer from './post_form_container';

class LinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      author_id: props.currentUser.id,
      title: '',
      body: '',
      source: '',
      file_type: '',
      image: ''
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
      file_type: ''
    });
  }

  handleSubmit () {
    const post = {
      author_id: this.state.author_id,
      title: this.state.title,
      body: this.state.body,
      source: this.state.source,
      file_type: '',
      image: ''
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
          Link
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
            <span className="poster">{this.props.currentUser.username}</span>
            <div className="post-field">
              <input className="post-input"
                type="text"
                placeholder="Type or paste a URL"
                value={this.state.title}
                onChange={this.update('title')}
              />
            </div>

            <div className="post-field">
              <input className="post-input"
                type="text"
                placeholder="Link description here"
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

export default PostFormContainer(LinkForm);
