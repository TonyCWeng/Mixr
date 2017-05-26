import { combineReducers } from 'redux';

import postsReducer from './posts_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  errors: errorsReducer,
  session: sessionReducer,
  users: usersReducer
});

export default rootReducer;
