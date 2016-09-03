# json.extract! playlist, :id, :user_id, :playlist_image_url, :title, :description, :tracks

order_hash = {}
playlist.playlist_tracks.each{|pt| order_hash[pt.track_id] = pt.order}


json.id playlist.id
json.user_id playlist.user_id
json.title playlist.title
json.description playlist.description
json.tracks playlist.tracks
json.order order_hash

json.username playlist.user.username

json.created_at playlist.created_at
