import React from 'react';
import Modal from 'react-modal';
import { style } from '../session/modal_style';
import PostFormContainer from './post_form_container';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      body: '',
      source: '',
      post_type: 'photo',
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
    var preview = document.querySelector('img');
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
      title: '',
      body: '',
      source: '',
      image: ''
    });
  }

  handleSubmit () {
    let formData = new FormData();
    formData.append('post[source]', this.state.source);
    formData.append('post[body]', this.state.body);
    formData.append('post[post_type]', 'photo');
    formData.append('post[image]', this.state.image);
    this.props.createMediaPost(formData)
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
            <section className="icon photo-icon post-hover">
            </section>
            <span className="btn-label">Photo</span>
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

            <span className="poster">{this.props.currentUser.username}</span>
            <div className="primary-field">

              <input className="media-input"
                type="file"
                accept="image/*"
                onChange={this.previewFile}
              />
            </div>
            <img className="preview" src={this.state.source} />

            <div className="post-field">
              <textarea className="post-input"
                type="text"
                placeholder="Add a Photo Description!"
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
                  disabled={!this.state.source}
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

export default PostFormContainer(TextForm);
