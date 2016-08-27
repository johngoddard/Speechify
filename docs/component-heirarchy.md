## Component Heirarchy

**OverallApp**

**AppContainer**
 - Sidebar
  + SidebarItems
  + SidebarPlaylistIndexContainer
  + SignedOutContentContainer
 - PlayContainer
 
**SignedOutContentContainer**
 - AuthFormContainer
 
**AuthFormContainer**
 - AuthForm
 
**SidebarPlaylistIndexContainer**
 - SidbarIndex
  + SidebarPlaylistLinks
 - AddPlaylistButtonContainer
  + AddPlaylistButton

**CreatePlaylistFormContainer**
 - CreatePlaylistForm

**Browse**

**AppContainer**
 -BrowseNav

**TracksIndex**
 - TracksIndexItemContainer

**TracksIndexItemContainer**
 - TracksIndexItem

**TracksIndexItem**
 - AddTrackToPlaylistContainer

**AddTrackToPlaylistContainer**
 - AddTrackToPlaylist

**PlaylistIndex**
 - PlaylistIndexItemContainer

**PlaylistIndexItemContainer**
 - PlaylistIndexItem

**View Playlist**

**PlaylistDetailContainer**
 - PlaylistDetail
 - PlaylistFormContainer
 - PlaylistTracksIndex
 - PlaylistToolsCotainer
  + PlaylistTracksIndexItemContainer

**PlayListToolsContainer**
 - EditPlaylistButton
 - DeletePlaylistButton
 
**PlaylistFormContainer**
 - PlayistForm
 
**PlaylistTracksIndexItemContainer**
 - PlaylistTracksIndexItem
 
**Follow**

**AppContainer**
- FollowNav
- UserIndex
 + UserIndexItemCotainer

**UserIndexItemContainer**
 - UserIndexItem

**Account / View User**
 
**UserDetailContainer**
 - UserDetail
 - UserToolsCotainer
 - EditUserButton
 - UserFormContainer
 - PlaylistIndex

**UserToolsContainer**
 - EditUserButton
 
**UserFormContainer**
 - UserForm

**Playing Tracks**

**PlayContainer**
 - CurrentTrackDisplay
 - CurrentTrackControlsContainer
 - CurrentTrackProgressBar
 - CurrentTrackContainer

**CurrentTrackContainer**
 - CurrentTrack
 
**CurrentTrackControlsContainer**
 - PlayButton
 - ForwardButton
 - BackButton


## Routes

|Path   | Component   | 
|-------|-------------|
| "/" | "SplashPage" |
| "/app" | "AppContainer" |
| "/app/sign-up" | "AuthFormContainer" |
| "/app/sign-in" | "AuthFormContainer" |
| "/app/discover/tracks" | "TracksIndex" |
| "/app/discover/playlists" | "PlaylistsIndex" |
| "/app/follow/friends" | "UserIndex" |
| "/app/follow/find-friends" | "UserIndex" |
| "/app/users/:user_id" | "UserDetailContainer" |
| "/app/users/:user_id/edit" | "UserDetailsFormContainer" |
| "/app/your-tracks" | "TracksIndex" |
| "/app/your-tracks/new" | "TrackFormContainer" |
| "/app/playlist/:playlist_id" | "PlaylistDetailContainer" |
| "/app/playlist/:playlist_id/edit" | "PlaylistFormContainer" |
| "/app/playlist/new" | "NewPlaylistFormContainer" |


