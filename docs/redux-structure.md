# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

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
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Track Cycles

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
  0. the `TrackReducer` removes `tracks[id]` from the application's state.

## Playlist Cycles

### Playlists API Request Actions

* `fetchAllPlaylists`
  0. invoked from `PlaylstsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/playlists` is called (with optional user parameter)
  0. `receiveAllPlaylists` is set as the success callback.

* `createPlaylist`
  0. invoked from new playlist button `onClick`
  0. `POST /api/playlists` is called.
  0. `receiveSinglePlaylist` is set as the callback.

* `fetchSinglePlaylist`
  0. invoked from `PlaylistDetail` `didMount`/`willReceiveProps`
  0. `GET /api/playlists/:id` is called.
  0. `receiveSinglePlaylist` is set as the success callback.

* `updatePlaylist`
  0. invoked from `PlaylistForm` `onSubmit`
  0. `POST /api/playlists` is called.
  0. `receiveSinglePlaylist` is set as the success callback.

* `destroyPlaylist`
  0. invoked from delete playlist button `onClick`
  0. `DELETE /api/playlists/:id` is called.
  0. `removePlaylist` is set as the success callback.

### Playlists API Response Actions

* `receiveAllPlaylist`
  0. invoked from an API callback.
  0. The `Playist` reducer updates `playists` in the application's state.

* `receiveSinglePlaylist`
  0. invoked from an API callback.
  0. The `Playlist` reducer updates `playlists[id]` in the application's state.

* `removePlaylist`
  0. invoked from an API callback.
  0. The `Playlist` reducer removes `playlists[id]` from the application's state.
  0. The `CurrentUser` reducer removes `playlists[id]` from the list of the current User's playlists
  
## Edit playlist tracks cycles

* `addSongtoPlaylist`
  0. invoked from `AddTrackToPlaylistForm` add button
  0. `POST /api/playlist_songs` is called 
  
* `removeSongFromPlaylist`
  0. invoked from `PlaylistTracksIndexItem` remove button
  0. `DELETE /api/playlist_songs/:id` is called 
  0. `removePlaylistTrack` is set as the success callback.
  
### EditPlayistTracks API Response Actions

* `removePlaylistTrack`
  0. invoked from the API callback
  0. `The PlayistDetails` reducer removes the appropriate track from the current playlist. 

## User Cycles

### Users API Request Actions

* `fetchAllUsers`
  0. invoked from `UsersIndex` `didMount`/`willReceiveProps`
  0. `GET /api/users` is called with an optional user parameter (to get users followed by the current user)
  0. `receiveAllUsers` is set as the success callback.

* `updateUser`
  0. invoked from `UserForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `updateCurrentUser` is set as the success callback.

### Tracks API Response Actions

* `receiveAllUsers`
  0. invoked from an API callback
  0. the `UserReducer` updates `users` in the application's state.

* `updateCurrentUser`
  0. invoked from an API callback
  0. the CurrentUserReducer` updates the currentUser information in the application's state.

## Follows cycles

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
  0. The `Users` reducer updates the follow status for the appropriate user, potentially hiding the user from the page. 
  
## Current Track Cycles

`updateCurrentTrack`
  0. invoked from play buttons on TrackIndexItems or PlaylistTrackIndexItems
  0. The `CurrentTrack` reducer updates the current track in the state, as well as the playing the property as necessary

`getNextTrack`
  0. invoked from the forward button in the 'PlayTrackController' or when a track ends
  0. The `CurrentTrack` reducer updates the current track with the next track in the queue

`togglePlaying`
  0. invoked from the play/pause button in the 'PlayTrackController'
  0. The `CurrentTrack` reducer toggles the `playing` boolean

`goBackTrack`
  0. invoked from the rewind button in the 'PlayTrackController'
  0. Restarts the current track, or goes back to the last played track depending on the currentTrack position






