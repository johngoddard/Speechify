# Speechify

[Speechify live][prodlink]

Speechify is a full-stack web application that let's users upload, stream, and share their favorite speeches. Inspired by Spotify, it is built on a Rails backend with a PostgreSQL database, and it usess React.js with a Redux architectural framework on the frontend.  

![Speechify home page: http://www.speechify.stream][home page]

## Features & Implementation

###Continuous audio streaming

Users can Continuously stream audio as the navigate around the site. This is largely due to Speechify's frontend architecture; it is a single-page web app that dynamically renders React components. The audio player, as well as the sound itself, are simply React components that persist as users navigate throughout the site.

![Speechify tracks page: http://www.speechify.stream/#/app/][tracks audio]

###Track uploading and editing

On the backend, tracks are stored in a single table that stores each track's `id`, `artist`, `title`, `user_id`, `track_image_url`, `audio_url`, and `category`. The tracks are indexed on user_id and category so different sets of tracks can be quickly fetched via API calls based on where a user is in the app.

Tracks are rendered in `TrackIndexItem` and `PlaylistTracksIndexItem` containers. A user can open a `TrackForm` via an edit link in the `TrackIndexItem` for tracks that they have created. The `TrackIndex` uses flexbox to organize tracks into a grid on any screen size.

###Playlist creation and editing

Users can organize tracks into playlists. Playlists are stored in a playlist table that tracks a playlist's `id`, `title`, and `description`. Playlists are associated with tracks via a PlaylistTracks join table that tracks a `playlist_id` and a `track_id`. The join table is indexed on `playlist_id` to make it fast to fetch all of the tracks for a playlist.

On the frontend, users can see Playlists in a `PlaylistIndexItem`, which shows a playlist's name and user, as well as in a `PlaylistDetail`, which also shows the Playlist's tracks. Clicking on a `PlaylistTracksIndexItem` in a playlist starts playing the playlist from that track.

Clicking an "Add to Playlist" button on a `TrackIndexItem` opens a modal that let's a user add or remove a track to any playlist that they've created via API calls.

![Speechify tracks page: http://www.speechify.stream/#/app/][playlist detail]

###Following users and playlists

Users can follow other users and playlists. Following other users add those users to the "You Follow" tab. Following another user's playlist creates a link to that playlist in the Sidebar.

On the backend, these follows are handled by UserFollows and PlaylistFollows join tables, which track `follower_id` and `followee_id`, and `user_id` and `playlist_id`, respectively. The tables are indexed on `follower_id` and `user_id` to make it quick to fetch the users and playlists the currently signed in user follows.

Custom API calls are made when users click 'follow' and 'unfollow' links on the frontend that create and destroy these follow associations.

![Speechify tracks page: http://www.speechify.stream/#/app/][user follows]

###Search

Users can search for tracks and playlists by using the search bar in the header. Calls to a custom search API are made dynamically as a user types in a search query. The API finds and returns tracks and playlists with `titles` or `artists` that matches the search query.

![Speechify tracks page: http://www.speechify.stream/][search]

###User Experience

One of the primary goals of this project was to create a smooth, desktop-app like user experience in the browser. This was largely accomplished via the Redux architectural pattern, which made full page refreshes largely unnecessary. Further, when a user signs in, some key information -- like created playlists and their corresponding tracks -- is pre-fetched and loaded into the application's store. Because of this, AJAX requests are not needed when users perform certain common actions, like opening a playlist that they created.

Some user testing was also completed to fine-tune application layout and interactions.

[prodlink]: http://www.speechify.stream
[home page]: ./docs/images/home.png "Speechify home page"
[tracks audio]: ./docs/images/track_audio.png "Speehify audio player"
[playlist detail]: ./docs/images/playlist_detail.png "Playlist detail page"
[user follows]: ./docs/images/user_follows.png "User follows page"
[search]: ./docs/images/search.png "User page"
