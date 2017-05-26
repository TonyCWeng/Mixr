# Mixr

[Mixr][mixr] is a microblogging website, designed to function similarly to Tumblr. Mixr enables users to share what's on their mind through media uploads and accompanying text.


![Mixr splash page: mixr-app.herokuapp.com][splash page]

## Features

- User accounts with secure frontend and backend authentication.
- Seven different post types enables users to easily express themselves.
- Post feed consisting of one's own posts alongside followed users' content.
- Following and unfollowing other users.
  - The post feed refreshes in accordance to followed / unfollowed users, allow users to directly
- Liking and unliking posts.

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

[mixr]: http://mixr-app.herokuapp.com/
[splash page]: ./docs/images/splash.png
[sample content]: ./docs/images/sample.png
[proposal]: ./docs/proposal.md
[schema]: ./docs/schema.md
