import merge from 'lodash/merge';

import {
  RECEIVE_POST,
  RECEIVE_ALL_POSTS,
  REMOVE_POST
}
from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_POST:
      const post = action.post;
      return merge({}, state, { post });
    case RECEIVE_ALL_POSTS:
      const posts = action.posts;
      return merge({}, state, { posts });
    case REMOVE_POST:
      const nextState = merge({}, state);
      delete nextState[action.post.id];
      return nextState;
    default:
      return state;
  }
};

export default postsReducer;
