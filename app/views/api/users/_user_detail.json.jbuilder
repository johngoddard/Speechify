json.username user.username
json.id user.id
json.description user.description
json.profile_image_url user.profile_image_url

if current_user.user_follows.where(followee_id: user.id).length > 0
  json.follows "true"
else
  json.follows "false"
end

json.playlists do
  json.array! user.playlists do |playlist|
    json.partial! 'api/playlists/playlist_detail', playlist: playlist
  end
end

json.tracks user.tracks
