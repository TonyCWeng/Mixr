export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

import * as UserAPIUtil from '../util/user_api_util';

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const requestAllUsers = users => dispatch => {
  return (
    UserAPIUtil
    .getUsers(users)
    .then(users => {
      return dispatch(receiveAllUsers(users));
    }));
};
