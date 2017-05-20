  json.post_id post.id
  json.author post.author_id
  json.username post.author.username
  json.title post.title
  json.body  post.body
  json.source post.source
  json.image_url asset_path(post.image.url)
