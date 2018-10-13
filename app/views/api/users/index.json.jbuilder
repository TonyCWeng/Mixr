json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.avatar url_for(user.avatar) if user.avatar.attached?
end
