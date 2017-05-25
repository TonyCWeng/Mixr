
json.id user.id
json.username user.username
json.avatar_url asset_path(user.avatar.url)
json.followed_users user.followed_users.map(&:user_id)
