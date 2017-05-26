import React from 'react';
import FeedItem from './feed_item';

class Feed extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPosts();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.posts.length !== nextProps.posts.length){
      this.props.requestAllPosts();
    }
  }

  render() {
    if (this.props.posts.length === 0) {
      return null;
    } else {
    return(
      <ul className="feed">
        {this.props.posts.reverse().map((post, i) => (
          <div key={`post-item-${i}`} className="item-container">
            <img className="avatar" src={post.avatar_url} />
            <li key={`post-${i}`} className="feed-item">
              <FeedItem post={post}
                likePost={this.props.likePost}
                dislikePost={this.props.dislikePost}
                currentUser={this.props.currentUser}
              />
            </li>
        </div>
        ))}
      </ul>
    );
  }
  }
}

export default Feed;
