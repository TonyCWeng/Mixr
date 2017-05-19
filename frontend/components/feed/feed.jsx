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
    return(
      <ul>
        {this.props.posts.reverse.map((post, i) => (
          <li key={`post-${i}`}>{post.title}</li>
        ))}
      </ul>
    );
  }
}

export default Feed;
