import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import merger from 'lodash/merge';

const usersReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_USERS:
      const users = action.users;
      return users;
    default:
      return state;
  }
};

export default usersReducer;
