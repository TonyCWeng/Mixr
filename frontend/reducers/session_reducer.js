import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
 } from '../actions/session_actions';

const _nullUser = {
  currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  const follow = action.follow;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    case RECEIVE_FOLLOW:
      if (!state.currentUser.followings.includes(follow.followee_id)) {
        newState.currentUser.followings.push(follow.followee_id);
      }
    return newState;
    case REMOVE_FOLLOW:
      if (state.currentUser.followings.includes(follow.followee_id)) {
        let pos = newState.currentUser.followings.indexOf(follow.followee_id);
        newState.currentUser.followings.splice(pos, 1);
      }
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
