# Speechify

https://speechify.herokuapp.com/

## Minimum Viable Product

Speechify is an audio-streaming web application inspired by Spotify and built using React/Redux in conjunction with a Ruby on Rails server.  By the end of Week 9, this app will, at a minimum, support the following functionality with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [x] Audio track creation, deletion, and updating
- [x] Playlist creation, deletion, and updating
- [x] Following playlists
- [x] Continuous audio streaming while navigating the site
- [x] Following other users
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 days)

**Objective:** Functioning rails project with front-end Authentication

- [x] New Rails project
- [x] `User` model/migration
- [x] Back end authentication (session/password)
- [x] `StaticPages` controller and root view
- [x] Webpack & react/redux modules
- [x] `APIUtil` to interact with the API
- [x] Redux cycle for frontend authentication
- [x] Sidebar component (signed out content only)
- [x] User signup/signin components
- [x] UserDetail component for currentUser on account tab
- [x] Style signup/signin components
- [x] Seed users
- [x] Review phase 1

### Phase 2: Tracks Model, API, and components (2 days)

**Objective:** Tracks can be created, read, edited and destroyed through
the API.

- [x] `Track` model
- [x] Audio file hosting (AWS?)
- [x] Image file hosting (AWS?)
- [x] Seed database with a small amount of test data
- [x] CRUD API for tracks (`TracksController`)
- [x] Create track form allows for uploading images and audio files
- [x] JBuilder views for tracks
- Track components and respective Redux loops
  - [x] `Sidebar`
  - [x] `TracksIndex`
  - [x] `TrackIndexItem`
  - [x] `TrackForm`
    + [x] Uploading audio files
    + [x] Uploading image files
- [x] Style tracks components
- [x] Seed tracks

### Phase 3: Playlists and playlist follows (2 day)

**Objective:** Playlists can be created, destroyed, followed, and unfollowed. Tracks can be added to and removed from playlists.

- [x] `Playlist` model
- [x] Seed database with a small amount of test data
- [x] CRUD API for playlists (`PlaylistsController`)
- [x] JBuilder views for playlists
- [x] Fetching playlists for the current user
- [x] Adding and removing tracks from playlists
- Playlist components and respective Redux loops
  - [x] `PlaylistIndex`
  - [x] `PlaylistIndexItem`
  - [x] `PlaylistTracksIndex`
  - [x] `PlaylistTracksIndexItem`
  - [x] `PlaylistForm `
  - [x] `PlaylistDetail `
  - [x] `AddTrackToPlaylist form `
- [x] Style playlist components
- [x] Seed playlists
- [x] `PlaylistFollow` model
- [x] Seed database with a small amount of test data
- [x] Create destroy API for playlists (`PlaylistsController`)
- [x] Add buttons for following / unfollowing playlists

### Phase 4: Streaming audio (2 days)

**Objective:** Audio can be streamed Continuously while navigating the site
- [x] Research streaming Audio
- [x] Current track Redux cycles and reducer
- [x] Current track components
  - [x] `PlayBar`
  - [x] `CurrentTrackDisplay`
  - [x] `CurrentTrackControlsContainer`
  - [x] `CurrentTrackProgressBar`
- [x] Styling for audio components

### Phase 5: Follow Users / updating current user (1 day)

**Objective:** Users can browse and follow other users.

- [x]`UserFollow` model
- [x] Create destroy API for follows (`UsersController`)
- Related components
  - [x] `UserIndex`
  - [x] `UserDetail`
  - [x] `UserForm`
- Styling for components


### Bonus Features (TBD)
- [x] Splash screen
- [x] Search for songs and playlists on search tab
- [x] Track categorization
- [x] Play Queue
- [ ] Mobile responsive
- [ ] Multiple sessions
- [ ] Browse tracks by location
