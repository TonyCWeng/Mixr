  json.post_id post.id
  json.author_id post.author_id
  json.username post.author.username
  json.title post.title
  json.body  post.body
  json.source post.source
  json.avatar_url url_for(post.author.avatar) if post.author.avatar.attached?
  json.post_type post.post_type
  json.image_url url_for(post.image) if post.image.attached?
  json.likes post.likes.map(&:user_id)
