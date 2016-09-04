json.extract! user, :username, :description, :id, :profile_image_url

json.track_count user.tracks.length
json.playlist_count user.playlists.length
json.followers user.user_followed_bys.length
