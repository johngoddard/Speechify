json.array! @playlists do |playlist|
  json.partial! 'api/playlists/playlist_detail', playlist: playlist
end
