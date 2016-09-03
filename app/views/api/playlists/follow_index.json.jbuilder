json.array! @playlists do |playlist|
  json.partial! 'followed_playlist', playlist: playlist
end
