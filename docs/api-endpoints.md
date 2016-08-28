# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `Get /api/users`
   - accepts `user_id` as optional query param get only users that the current user follows
   - accepts limit/pagination params if I get there
- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Tracks

- `GET /api/tracks`
  - accepts `user_id` query param to get tracks that belong to user
  - accepts limit/pagination params if I get there
- `POST /api/tracks`
- `PATCH /api/tracks/:id`
- `DELETE /api/tracks/:id`

### Playlists

- `GET /api/playlists`
  - accepts `user_id` query param to get playlists that belong to user
  - accepts limit/pagination params if I get there
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `DELETE /api/playlists/:id`

### UserFollows

- `POST /api/user_follows`: add a follow from the current user to the user with :user_id
  - accepts 'followee_id' as a param to specify the user the current user will follow
- `DELETE /api/user_follows/:user_follow_id`

### PlaylistFollows

- `POST /api/playlist_follows`: create a follow from the current user to the specified playlist
  - accepts 'playlist_id' as a param
- `DELETE /api/playlist_follows/:playlist_follow_id`

### PlaylistTracks

- `POST /api/playlist_tracks`: add a track to the given playlist
  - accepts 'playlist_id' and 'track_id' as params
- `DELETE /api/playlist_tracks/:playlist_track_id`: remove a track from the playlist
