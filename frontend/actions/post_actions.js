import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';

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
      type: REMOVE_POST,
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

export const createPost = post => dispatch => {
  return (
  PostAPIUtil
  .createPost(post)
  .then(post => {
    return dispatch(receivePost(post));
  }));
};

export const createMediaPost = post => dispatch => {
  return (
  PostAPIUtil
  .createMediaPost(post)
  .then(post => {
    return dispatch(receivePost(post));
  }));
};

export const updatePost = post => dispatch => {
  PostAPIUtil
  .updatePost(post)
  .then(post => {
    return dispatch(receivePost(post));
  });
};

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const likePost = id => dispatch => {
  return (
    PostAPIUtil
    .createLike(id)
    .then(like => {
      return dispatch(receiveLike(like));
  }));
};

export const dislikePost = id => dispatch => {
  return (
    PostAPIUtil
    .deleteLike(id)
    .then(like => {
      return dispatch(removeLike(like));
  }));
};
