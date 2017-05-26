import values from 'lodash/values';

export const selectAllPosts = ( posts ) => {
  return values(posts);
};

export const selectAllUsers = ( users ) => {
  return values(users);
};
