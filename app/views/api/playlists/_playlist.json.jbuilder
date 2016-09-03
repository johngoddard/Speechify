# json.extract! playlist, :id, :user_id, :playlist_image_url, :title, :description, :tracks

json.id playlist.id
json.user_id playlist.user_id
json.title playlist.title
json.description playlist.description
json.track_count playlist.tracks.length

json.username playlist.user.username

if playlist.tracks.length > 0
  json.playlist_cover_url playlist.tracks[0].track_image_url
else
  json.playlist_cover_url ''
end

json.created_at playlist.created_at
