json.id user.id
json.username user.username
json.avatar_url user.avatar_url if user.avatar.attached?
json.followings user.followings.map(&:followee_id)
