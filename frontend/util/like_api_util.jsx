export const createLike = like => {
  return $.ajax({
    method: 'POST',
    url: `api/posts/${like.post_id}/likes`,
    data: {like}
  });
};

export const deleteLike = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`
  });
};
