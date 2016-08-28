# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

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

- `POST /api/users/:user_id/follows`: add a follow from the current user to the user with :user_id
- `DELETE /api/notes/:user_id/follows/:follow_id`: remove current user's follow
  name

### PlaylistTracks

- `POST /api/playlists/:playlist_id/tracks`: add a track to the given playlist
- `DELETE /api/playlists/:playlist_id/tracks/:playlist_track_id`: remove a track from the playlist
