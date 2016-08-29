# Redux Structure

## Auth Cycles

The following cycles are responsible for creating, signin in and signing out users.
Components that update based on these cycles:
--Sidebar

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `SigninForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `SingnoutButton` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` and `fetchCurrentPlaylists` are set as success callbacks.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

The following cycles are responsible for displaying error messages.

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Loading Cycles

### Loading actions

* `startLoading`
  0. invoked immediately after an AJAX request is sent.
  0. the `LoadingReducer` sets `loading` in the state to `true`.

* `stopLoading`
  0. invoked in the success & error callbacks to AJAX requests.
  0. the `LoadingReducer` sets `loading` in the state to `false`.

## Track Cycles

The following cycles are used for displaying, creating, updating, and deleting tracks.

These actions could update the following components:
- TracksIndex
- TracksIndexItem

### Tracks API Request Actions

* `fetchAllTracks`
  0. invoked from `TracksIndex` `didMount`/`willReceiveProps`, and `PlaylistDetails` `didMount`/`willReceiveProps`
  0. `GET /api/tracks` is called.
  0. `receiveAllTracks` is set as the success callback.

* `createTrack`
  0. invoked from new track button `onClick`
  0. `POST /api/tracks` is called.
  0. `receiveSingleTrack` is set as the success callback.

* `updateTrack`
  0. invoked from `TrackForm` `onSubmit`
  0. `POST /api/tracks` is called.
  0. `receiveSingleTrack` is set as the success callback.

* `destroyTrack`
  0. invoked from delete track button `onClick`
  0. `DELETE /api/tracks/:id` is called.
  0. `removeTrack` is set as the success callback.

### Tracks API Response Actions

* `receiveAllTracks`
  0. invoked from an API callback
  0. the `TrackReducer` updates `tracks` in the application's state.

* `receiveSingleTrack`
  0. invoked from an API callback
  0. the `TrackReducer` updates `tracks[id]` in the application's state.

* `removeTrack`
  0. invoked from an API callback
  0. the `TracksReducer` removes `tracks[id]` from the application's state.
  0. the `CurrentPlaylistsReducer` removes the track from any of the current playlists as needed

## Current Playlist Cycles

The following actions are used for fetching and updating a user's current playlists (displayed in the sidebar), fetching the all playlists for browsing, fetching a single playlist for playlist details, and following/unfollowing another user's playlists. 

These actions could update the following components:
- PlaylistsIndex
- SidebarPlaylistIndex
- PlaylistDetail
- Follow/Unfollow buttons

### Current Playlist API Request Actions

* `fetchCurrentUserPlaylists`
  0. invoked from as a callback to `fetchCurrentUser`
  0. `GET /api/playlists` is called (with `with_tracks` and `current_user` parameters set to true to get all info for the current user's created and shared playlists)
  0. `receiveCurrentPlaylists` is set as the success callback

* `createPlaylist`
  0. invoked from new playlist button `onClick`
  0. `POST /api/playlists` is called.
  0. `receiveCurrentPlaylist` and is set as the callback.

* `destroyPlaylist`
  0. invoked from delete playlist button `onClick`
  0. `DELETE /api/playlists/:id` is called.
  0. `removeCurrentPlaylist` is set as the success callback.

* `followPlaylist`
  0. invoked from playlist follow button `onClick`
  0. `POST /api/playlists_follows` is called.
  0. `receiveCurrentPlaylist` and is set as the callback.

* `unfollowPlaylist`
  0. invoked from playlist follow button `onClick`
  0. `DELETE /api/playlists_follows/:id` is called.
  0. `removeCurrentPlaylist` and is set as the callback.

* `fetchAllPlaylists`
  0. invoked from `PlaylistIndex` `didMount`/`willReceiveProps`
  0. `GET /api/playlists` is called (with optional user parameter)
  0. `receiveAllPlaylists` is set as the success callback.

* `fetchSinglePlaylist`
  0.  invoked from `PlaylistDetail` `didMount`/`willReceiveProps`
  0. `GET /api/playlists/:id` is called if the playlist does not belong to the current user (else just grab it from  the currentPlaylists)
  0. `receiveSinglePlaylist` is set as the success callback.

### Current Playlist API Response Actions

* `receiveCurrentPlaylists`
  0. invoked from an API callback.
  0. The `CurrentPlaylists` reducer updates `currentPlaylists` in the application's state.

* `receiveCreatedPlaylist`
  0. invoked from an API callback.
  0. The `CurrentPlaylist` reducer updates `createdPlaylists[id]` in the application's state.

* `removeCurrentPlaylist`
  0. invoked from API callback
  0. The `CurrentPlaylist` reducer removes the deleted playlist

* `updatePlaylist`
  0. invoked from `PlaylistForm` `onSubmit`
  0. `POST /api/playlists` is called.
  0. `receiveSinglePlaylist` is set as the success callback.

  * `receiveAllPlaylists`
  0. invoked from an API callback.
  0. The `Playlist` reducer updates `playlists` in the application's state.

  * `receiveSinglePlaylist`
  0. invoked from an API callback.
  0. The `Playlist` reducer updates `playlists[id]` in the application's state.

## Playlist tracks cycles
These cycles are responsible for adding and removing playlists from tracks.

These actions could update the following components:
-PlaylistTracksIndex
-AddTrackToPlaylistForm

### Playist Tracks API Response Actions

* `addSongtoPlaylist`
  0. invoked from `AddTrackToPlaylistForm` add button
  0. `POST /api/playlist_songs` is called
  0. `addPlaylistTrack` is set as the success callback.

* `removeSongFromPlaylist`
  0. invoked from `PlaylistTracksIndexItem` remove button
  0. `DELETE /api/playlist_songs/:id` is called
  0. `removePlaylistTrack` is set as the success callback.

### Playlist Tracks API Response Actions

* `removePlaylistTrack`
  0. invoked from the API callback
  0. the `CurrentPlaylist` reducer removes the appropriate track from the playlist.

* `addPlaylistTrack`
  0. invoked from the API callback
  0. the `CurrentPlaylist` reducer adds the appropriate track from the playlist.

## User Cycles

These cycles are responsible for updating the current user, browsing users, and viewing followed users,

These actions could update the following components:
-UsersIndex
-UserIndexItem
-UserDetail

### Users API Request Actions

* `fetchAllUsers`
  0. invoked from `UsersIndex` `didMount`/`willReceiveProps`
  0. `GET /api/users` is called with an optional user parameter (to get users followed by the current user)
  0. `receiveAllUsers` is set as the success callback.

* `updateUser`
  0. invoked from `UserForm` `onSubmit`
  0. `PATCH /api/users/:id` is called.
  0. `updateCurrentUser` is set as the success callback.

### Users API Response Actions

* `receiveAllUsers`
  0. invoked from an API callback
  0. the `UserReducer` updates `users` in the application's state.

* `updateCurrentUser`
  0. invoked from an API callback
  0. the `CurrentUserReducer` updates the currentUser information in the application's state.

## Follows cycles

These cycles are responsible for following / unfollowing users.

These actions could update the following components:
-UserIndexItem
-UserDetail

### Follow user API request actions

* `followUser`
  0. invoked from `UserIndexItem` follow button
  0. `POST /api/user_follows` is called
  0. `toggleUserFollow` is set as the success callback.

* `unfollowUser`
  0. invoked from `PlaylistTracksIndexItem` unfollow button
  0. `DELETE /api/user_follows/:id` is called
  0. `toggleUserFollow` is set as the success callback.

### Follows API Response Actions

* `toggleUserFollow`
  0. invoked from the API callback
  0. The `Users` reducer updates the `user_follow_id` field for the appropriate user  

## Current Track Cycles

These cycles are responsible for controlling the current track.

These actions could update the following components:
- CurrentTrackDisplay
- CurrentTrackControls
- CurrentTrackProgressBar

`changeCurrentTrack`
  0. invoked from play buttons on TrackIndexItems or PlaylistTrackIndexItems
  0. The `CurrentTrack` reducer updates the current track in the state, as well as the playing the property as necessary

`getNextTrack`
  0. invoked from the forward button in the 'PlayTrackController' or when a track ends
  0. The `CurrentTrack` reducer updates the current track with the next track in the queue

`togglePlaying`
  0. invoked from the play/pause button in the 'PlayTrackController'
  0. The `CurrentTrack` reducer toggles the `playing` boolean

`getPrevTrack`
  0. invoked from the rewind button in the 'PlayTrackController'
  0. Restarts the current track, or goes back to the last played track depending on the currentTrack position
