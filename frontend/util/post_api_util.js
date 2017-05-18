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
    posts
  })
);

export const createPost = post => (
  $.ajax({
    method: 'CREATE',
    url: 'api/posts',
    post
  })
);

export const deletePost = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`
  })
);
