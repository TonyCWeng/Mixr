# Mixr

[Mixr][mixr] is a microblogging website, designed to function similarly to Tumblr. Mixr enables users to share what's on their mind through media uploads and accompanying text.


![Mixr splash page: mixr-app.herokuapp.com][splash page]

## Features

- User accounts with secure frontend and backend authentication.
- Option to attach media files to posts
```Javascript
  handleMedia(e) {
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ source: reader.result, image: file});
    }.bind(this);
    if (file) {
      reader.readAsDataURL(file);
    }
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
```
- Post feed consisting of one's own posts alongside followed users' content.
- Following and unfollowing other users.
  - The post feed refreshes in accordance to followed / unfollowed users, allowing users to personalize their content feed.

```Javascript
class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followings: props.currentUser.followings,
      posts: props.posts
    };
  }

  componentDidMount() {
    this.props.requestAllPosts();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.currentUser) {
      if (nextProps.currentUser.followings !== this.props.currentUser.followings){
        this.props.requestAllPosts();
      }
    }
  }
```
- Liking and unliking posts.
- Deleting posts.

![sample content][sample content]

## Project Design

Mixr was built over the course of two weeks. A [proposal][proposal] was drafted in advance to provide an overarching framework to follow. This proposal was supplemented with an accompanying [schema][schema].


## Technology

Mixr was built with the following technologies:

### Backend

- Ruby on Rails
- Postgresql
- Heroku


### Frontend

- React Redux
  - Modal
  - Router
- npm
- Webpack
- Babel

### Storage

- Amazon Web Services

## Future Implementations

- User profiles
- Feed filtering based on content
- Tumblr-esque ask posts

[mixr]: http://mixr-app.herokuapp.com/
[splash page]: ./docs/images/splash.png
[sample content]: ./docs/images/sample.png
[proposal]: ./docs/README.md
[schema]: ./docs/schema.md
