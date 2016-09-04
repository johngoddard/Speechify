json.extract! user, :username, :description, :id, :profile_image_url


json.follow_date user.user_followed_bys.where(follower_id: current_user.id)[0].created_at
json.track_count user.tracks.length
json.playlist_count user.playlists.length
json.followers user.user_followed_bys.length
