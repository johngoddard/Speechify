# Component Heirarchy

## App level

**AppContainer**
 - Sidebar
  + SidebarItems
  + SidebarPlaylistIndexContainer
  + SignedOutContent
 - PlayContainer

**AuthFormContainer**
 - SignupForm
 - SigninForm

**SidebarPlaylistIndexContainer**
 - SidbarIndex
  + SidebarPlaylistLinks
 - AddPlaylistButtonContainer
  + AddPlaylistButton

**PlaylistFormContainer**
 - PlaylistForm

##Browse

**AppContainer**
 -BrowseNav

**TracksIndex**
 - TracksIndexItemContainer

**TracksIndexItemContainer**
 - TracksIndexItem
 - TrackToolsContainer

**TrackTools**
 - Edit track button
 - Delete track button

**AddTrackToPlaylistFromContainer**
 - AddTrackToPlaylistForm

**PlaylistIndex**
 - PlaylistIndexItemContainer

**PlaylistIndexItemContainer**
 - PlaylistIndexItem

##View Playlist

**PlaylistDetailContainer**
 - PlaylistDetail
  + PlaylistTracksIndex
   *  PlaylistTracksIndexItemContainer
  + PlaylistToolsCotainer


**PlayListToolsContainer**
 - EditPlaylistButton
 - DeletePlaylistButton

**PlaylistFormContainer**
 - PlayistForm

**PlaylistTracksIndexItemContainer**
 - PlaylistTracksIndexItem

##Follow

**AppContainer**
- FollowNav
- UserIndex
 + UserIndexItemCotainer

**UserIndexItemContainer**
 - UserIndexItem

##Your Tracks

**TracksIndex**
 - TracksIndexItemContainer
 - TrackFormContainer

**TrackFromContain**
 - TrackForm

**TracksIndexItemContainer**
 - TracksIndexItem

##Account / View User

**AppContainer**
 - UserDetailContainer
 - PlaylistIndex


**UserDetailContainer**
 - UserDetail
  + UserToolsCotainer
  + SignoutButton

**UserToolsContainer**
 - EditUserButton

**UserFormContainer**
 - UserForm

##Playing Tracks

**PlayBarContainer**
 - PlayBar
   + CurrentTrackDisplay
   + CurrentTrackControlsContainer
   + CurrentTrackProgressBarContainer

**CurrentTrackControlsContainer**
 - PlayButton
 - ForwardButton
 - BackButton

**CurrentTrackProgressBarContainer**
  - CurrentTrackProgressBar


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SplashPage" |
| "/browse/tracks" | "TracksIndex" |
| "/browse/playlists" | "PlaylistsIndex" |
| "/follow/friends" | "UserIndex" |
| "/follow/find-friends" | "UserIndex" |
| "/users/:user_id" | "UserDetailContainer" |
| "/users/:user_id/edit" | "UserDetailsFormContainer" |
| "/your-tracks" | "TracksIndex" |
| "/your-tracks/new" | "TrackFormContainer" |
| "/playlist/:playlist_id" | "PlaylistDetailContainer" |
| "/playlist/:playlist_id/edit" | "PlaylistFormContainer" |
| "/playlist/new" | "NewPlaylistFormContainer" |
