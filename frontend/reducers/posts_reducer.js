import merge from 'lodash/merge';

import {
  RECEIVE_POST,
  RECEIVE_ALL_POSTS,
  REMOVE_POST,
  RECEIVE_LIKE,
  REMOVE_LIKE
}
from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_POST:
      const post = action.post;
      newState[post.id] = post;
      return newState;
    case RECEIVE_ALL_POSTS:
      const posts = action.posts;
      return posts;
    case REMOVE_POST:
      delete newState[action.post.id];
      return newState;
    case RECEIVE_LIKE:
      const like = action.like;
      if (!state[like.post_id].likes.includes(like.user_id)) {
        newState[like.post_id].likes.push(like.user_id);
      }
      return newState;
    case REMOVE_LIKE:
      if (state[like.post_id].likes.includes(like.user_id)) {
        let position = newState[like.post_id].likes.indexOf(like.user_id);
        newState[like.post_id].likes.splice(position, 1);
      }
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
