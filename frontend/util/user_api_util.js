export const getUsers = users => {
  return $.ajax({
    method: 'GET',
    url: `api/users`
  });
};
