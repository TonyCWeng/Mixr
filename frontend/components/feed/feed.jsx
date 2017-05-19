import React from 'react';

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
      <ul>
        {this.props.posts.reverse().map((post, i) => (
          <li key={`post-${i}`}>
            {post.title}
            <br></br>
            {post.body}
          </li>
        ))}
      </ul>
    );
  }
  }
}

export default Feed;