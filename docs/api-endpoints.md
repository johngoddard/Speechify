# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id/follow`: custom route to create a user follow between the current user (follower) & specified user (followee)
- `GET /api/users/:id/unfollow`: custom route to destroy the user follow for the current user & specified user

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
- `GET /api/playlists/:id/follow`: custom route to create a playlist follow for the current user & specified playlist
- `GET /api/playlists/:id/unfollow`: custom route to destroy the playlist follow for the current user & specified playlist

