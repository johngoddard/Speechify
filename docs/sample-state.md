```json
{
  currentUser: {
    id: 1,
    username: "nauticaljack",
    description: "current user description",
    profileImageUrl: "path/to/prof/image"
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
    createTrack: {errors: ["title can't be blank"]},
    playlist: {},
    user: {}
  },
  // loading spinner status
  loading: false,
  //information about the currently playing track
  currentTrack: {
    track:  {
      id: 3
      title: "Redux",
      userId: 3,
      description: "description",
      coverUrl: "http://path/to/cover",
      audioUrl: "http://path/to/audio",
    }
    trackQueue: [track1, track2, track3],
    previousTracks: [track4, track5],
    trackPosition: 2000,
    playing: true
  },
  playlists: {
    //the current user's created playlists, fetched on sign-in. Songs including to facilitate the AddTrackToPlaylistForm having adequate information.
    createdPlaylists: {
      3: {
          id: 3
          title: "Redux",
          userId: 3,
          description: "description",
          coverUrl: "http:/path/to/cover",
          tracks: [
            {
              id: 1
              title: "Redux",
              userId: 3,
              description: "description",
              follows: false,
              coverUrl: "http://path/to/cover",
              audioUrl: "http://path/to/audio"
          }
        ]
      }
    }
    //the current user's followed playlists, fetched on sign-in to display in the Sidebar
    followedPlaylists: {
      1:  {
        id: 1
        title: "Redux",
        userId: 3,
        description: "description",
        follows: true,
        coverUrl: "http:/path/to/cover",
      }
    },
    // index of playlists, fetched on browse page
    allPlaylists: {
       5: {
            id: 5,
            title: "Redux",
            user_id: 3,
            follows: false
            description: "description",
            coverUrl: "http:/path/to/cover"
          }
    },
    //vieweing a playlist details page (include all tracks)
    playlistDetail: {
      id: 1,
      title: "Redux",
      description: "lorem ipsum descritption",
      follows: true,
      userId: 4,
      tracks: [
         1:  {
            id: 1,
            title: "Redux",
            user_id: 3,
            description: "description",
            coverUrl: "http://path/to/cover",
            audioUrl: "http://path/to/audio",
          }
      ]
    },
  },
  //index of tracks, fetched when browsing tracks or viewing created tracks
  allTracks: {
    1:  {
          id: 1,
          title: "Redux",
          user_id: 3,
          description: "description",
          coverUrl: "http://path/to/cover",
          audioUrl: "http://path/to/audio",
        }
  },
  users {
    //user index, fetched when viewing followed users or users to follow
    allUsers: {
      3: {
          id: 3,
          username: "username",
          bio: "bio",
          userId: 3,
          follows: true
          profileImageUrl: "http:/path/to/cover"
        }
    },
    //viewing a single user page (includes index of that user's playlists)
    userDetail: {
      user:  {
          id: 3
          username: "username",
          bio: "bio",
          user_id: 3,
          follows: true
          profileImageUrl: "http:/path/to/cover"
      },
      playlists: {
        1: {
            id: 1
            title: "Redux",
            userId: 3,
            follows: false
            description: "description",
            coverUrl: "http:/path/to/cover"
        }
      }
    }
  }
}
