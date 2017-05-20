import React from 'react';
import Modal from 'react-modal';
import { style } from '../session/modal_style';
import PostFormContainer from './post_form_container';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      author_id: props.currentUser.id,
      title: '',
      body: '',
      source: '',
      file_type: 'image',
      image: ''
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.previewFile = this.previewFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  previewFile() {
    var preview = document.querySelector('video');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", () => {
      preview.src = reader.result;
      this.setState({ source: preview.src, image: file });
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
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
    let formData = new FormData();
    formData.append('post[author_id]', this.state.author_id);
    formData.append('post[source]', this.state.source);
    formData.append('post[body]', this.state.body);
    this.props.createMediaPost(formData)
              .then(this.handleCloseModal());
  }

  render () {
    return (
      <div>
        <button
          className="btn header-button"
          onClick={this.handleOpenModal}
        >
          Video
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
                type="file"
                accept="video/*"
                onChange={this.previewFile}
              />
            </div>

            <div className="post-field">
              <textarea className="post-input"
                type="text"
                placeholder="Captions here!"
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

            <button className="btn form-button"
              onClick={this.handleSubmit}
              disabled={!this.state.source}
            >
              Post
            </button>
          </div>
        </div>


        </Modal>
      </div>
    );
  }
}

export default PostFormContainer(VideoForm);
