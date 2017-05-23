  json.post_id post.id
  json.author_id post.author_id
  json.username post.author.username
  json.title post.title
  json.body  post.body
  json.source post.source
  json.avatar_url asset_path(post.author.avatar.url)
  json.post_type post.post_type
