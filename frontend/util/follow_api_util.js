export const createFollow = id => {
  return $.ajax({
    method: 'POST',
    url: `api/posts/${id}/like`
  });
};

export const deleteFollow = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}/like`
  });
};
