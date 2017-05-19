export const getPost = id => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}`,
  })
);

export const getPosts = posts => (
  $.ajax({
    method: 'GET',
    url: 'api/posts',
    data: posts
  })
);

export const createPost = post => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: post,
    contentType: false,
    processData: false
  });
};

export const deletePost = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`
  })
);
