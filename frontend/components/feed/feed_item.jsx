import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);

    this.text = this.text.bind(this);
    this.photo = this.photo.bind(this);
    this.quote = this.quote.bind(this);
    this.link = this.link.bind(this);
    this.chat = this.chat.bind(this);
    this.audio = this.audio.bind(this);
    this.video = this.video.bind(this);

    this.toggleLike = this.toggleLike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleLike() {
    if (this.props.post.likes.includes(this.props.currentUser.id)) {
      this.props.dislikePost(this.props.post.post_id);
    } else {
      this.props.likePost(this.props.post.post_id);
    }
  }

  handleDelete() {
    this.props.deletePost(this.props.post.post_id);
  }

  heart() {
    if (this.props.post.likes.includes(this.props.currentUser.id)) {
      return (
        <div className="heart-container">
          <div onClick={this.toggleLike} className="heart red">❤</div>
        </div>
      );
    } else {
      return (
        <div className="heart-container">
          <div onClick={this.toggleLike} className="heart">❤</div>
        </div>
      );
    }
  }

  delete() {
    if (this.props.post.author_id === this.props.currentUser.id) {
      return (
        <div className="delete-container">
          <div onClick={this.handleDelete} className="nix">X</div>
        </div>
      );
    }
  }

  text() {
    return (
      <div className="post-container">

        <div className="post">
          <div className="poster">{this.props.post.username}</div>

          <div className="post-content">
            <p className="title">{this.props.post.title}</p>
          </div>

          <div className="description-container">
            <p className="post-description">{this.props.post.body}</p>
          </div>

          <div className="item-footer">
            {this.delete()}
            {this.heart()}
          </div>
        </div>
      </div>
    );
  }

  photo() {
    return (
      <div className="post-container">

        <div className="post">
          <div className="poster">{this.props.post.username}</div>

          <div className="post-content">
            <img className="photo-content" src={this.props.post.source} />
          </div>

          <div className="description-container">
            <p className="post-description">{this.props.post.body}</p>
          </div>

          <div className="item-footer">
            {this.delete()}
            {this.heart()}
          </div>
        </div>
      </div>
    );
  }

  quote() {
    return (
      <div className="post-container">

        <div className="post">
          <div className="poster">{this.props.post.username}</div>

          <div className="post-content">
            <p className="quote-content">{this.props.post.title}</p>
          </div>

          <div className="description-container">
            <p className="post-description">{this.props.post.body}</p>
          </div>

          <div className="item-footer">
            {this.delete()}
            {this.heart()}
          </div>
        </div>
      </div>
    );
  }

  link() {
    return (
      <div className="post-container">

        <div className="post">
          <span className="poster">{this.props.post.username}</span>

          <div className="post-content">
            <h1 className="link-content">
              <a href={`http://${this.props.post.title}`}>
                {this.props.post.title}
              </a>
            </h1>
          </div>

          <div className="description-container">
            <p className="post-description">{this.props.post.body}</p>
          </div>

          <div className="item-footer">
            {this.delete()}
            {this.heart()}
          </div>

        </div>
      </div>
    );
  }

  chat() {
    return (
      <div className="post-container">

        <div className="post">
          <div className="poster">{this.props.post.username}</div>

          <div className="post-content">
            <p className="title">{this.props.post.title}</p>
          </div>

          <div className="description-container">
            <p className="post-description">{this.props.post.body}</p>
          </div>

          <div className="item-footer">
            {this.delete()}
            {this.heart()}
          </div>
        </div>
      </div>
    );
  }

  audio() {
    return (
      <div className="post-container">

        <div className="post">
          <div className="poster">{this.props.post.username}</div>

          <div className="post-content">
            <audio controls height="30">
              <source src={this.props.post.source} type="audio/mp3"></source>
              <source src={this.props.post.source} type="audio/ogg"></source>
              <source src={this.props.post.source} type="audio/wav"></source>
            </audio>
          </div>

          <div className="description-container">
            <p className="post-description">{this.props.post.body}</p>
          </div>

          <div className="item-footer">
            {this.delete()}
            {this.heart()}
          </div>
        </div>
      </div>
    );
  }

  video() {
    return (
      <div className="post-container">

        <div className="post">
          <div className="poster">{this.props.post.username}</div>

          <div className="post-content">
            <video className="video-content" width="520" height="340" controls>
                <source src={this.props.post.source} type="video/mp4" />
                <source src={this.props.post.source} type="video/ogg" />
            </video>
          </div>

          <div className="description-container">
            <p className="post-description">{this.props.post.body}</p>
          </div>

          <div className="item-footer">
            {this.delete()}
            {this.heart()}
          </div>
        </div>
      </div>
    );
  }


  render() {
    const { post_type } = this.props.post;

    switch(post_type) {
      case "text":
        return this.text();
      case "photo":
        return this.photo();
      case "quote":
        return this.quote();
      case "link":
        return this.link();
      case "chat":
        return this.chat();
      case "audio":
        return this.audio();
      case "video":
        return this.video();
      default:
        return this.text();
    }
  }
}

export default FeedItem;
