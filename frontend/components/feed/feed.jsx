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
            <img src={post.source} />
          
            <video width="540" height="360" controls>
              <source src={post.source}  />
            </video>

            <audio controls>
              <source src={post.source} />
            </audio>

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
