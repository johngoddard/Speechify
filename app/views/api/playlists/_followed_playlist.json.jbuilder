json.id playlist.id
json.user_id playlist.user_id
json.title playlist.title
json.description playlist.description
json.user_playlist_date playlist.playlist_follows.where(user_id: current_user.id)[0].created_at
