import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

const receiveAllPosts = posts => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  };
};

const removePost = post => {
  return {
      type: 'DELETE_POST',
      post
  };
};

export const requestSinglePost = id => dispatch => (
  PostAPIUtil
    .getPost(id)
    .then(post => dispatch(receivePost(post)))
);

export const requestAllPosts = posts => dispatch => (
  PostAPIUtil
    .getPosts(posts)
    .then(posts => dispatch(receiveAllPosts(posts)))
);

export const deletePost = id => dispatch => (
  PostAPIUtil
  .deletePost(id)
  .then(post => dispatch(removePost(post)))
);

export const createPost = post => dispatch => (
  PostAPIUtil
  .createPost(post)
  .then(post => dispatch(receivePost(post)))
);
