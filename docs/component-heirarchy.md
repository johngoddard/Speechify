# Component Heirarchy

## App level

**AppContainer**
 - Sidebar
  + SidebarItems
  + SidebarPlaylistIndexContainer
  + SignedOutContent
 - PlayContainer
 
**AuthFormContainer**
 - AuthForm
 
**SidebarPlaylistIndexContainer**
 - SidbarIndex
  + SidebarPlaylistLinks
 - AddPlaylistButtonContainer
  + AddPlaylistButton

**CreatePlaylistFormContainer**
 - CreatePlaylistForm

##Browse

**AppContainer**
 -BrowseNav

**TracksIndex**
 - TracksIndexItemContainer

**TracksIndexItemContainer**
 - TracksIndexItem

**AddTrackToPlaylistFromContainer**
 - AddTrackToPlaylistForm

**PlaylistIndex**
 - PlaylistIndexItemContainer

**PlaylistIndexItemContainer**
 - PlaylistIndexItem

##View Playlist**

**PlaylistDetailContainer**
 - PlaylistDetail
  + PlaylistTracksIndex
  + PlaylistToolsCotainer
  + PlaylistTracksIndexItemContainer

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

##Account / View User
 
**UserDetailContainer**
 - UserDetail
  + UserToolsCotainer
  + PlaylistIndex

**UserToolsContainer**
 - EditUserButton
 
**UserFormContainer**
 - UserForm

##Playing Tracks

**PlayContainer**
 - CurrentTrackDisplay
 - CurrentTrackControlsContainer
 - CurrentTrackProgressBarContainer
 
**CurrentTrackControlsContainer**
 - PlayButton
 - ForwardButton
 - BackButton

**CurrentTrackProgressBarContainer**
  - CurrentTrackProgressBa


## Routes

|Path   | Component   | 
|-------|-------------|
| "/" | "SplashPage" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
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


