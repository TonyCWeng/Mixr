json.id user.id
json.username user.username
json.avatar_url url_for(user.avatar) if user.avatar.attached?
json.followings user.followings.map(&:followee_id)
