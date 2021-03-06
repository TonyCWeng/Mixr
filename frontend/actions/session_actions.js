import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveCurrentUser = currentUser => {
  return {type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const signup = user => dispatch => (
  SessionAPIUtil
    .signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = user => dispatch => (
  SessionAPIUtil
    .login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil
    .logout()
    .then(user => dispatch(receiveCurrentUser(null)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const followUser = id => dispatch => {
  return(
    SessionAPIUtil
    .createFollow(id)
    .then(follow => {
      return dispatch(receiveFollow(follow));
    }));
};

export const unfollowUser = id => dispatch => {
  return(
    SessionAPIUtil
    .deleteFollow(id)
    .then(follow => {
      return dispatch(removeFollow(follow));
    }));
};
