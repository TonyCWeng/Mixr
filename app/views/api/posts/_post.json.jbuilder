  json.post_id post.id
  json.author_id post.author_id
  json.username post.author.username
  json.title post.title
  json.body  post.body
  json.source post.source
  json.avatar_url post.author.avatar_url if post.author.avatar.attached?
  json.post_type post.post_type
  json.image_url asset_path(post.image_url) if post.image.attached?
  json.likes post.likes.map(&:user_id)
