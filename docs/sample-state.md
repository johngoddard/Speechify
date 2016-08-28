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
  //the current user's created and follewed playlists (displayed in the sidebar)
  currentPlaylists: {
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
              coverUrl: "http://path/to/cover",
              audioUrl: "http://path/to/audio",
              playlistTrackId: 5
          }
        ]
      }
    }
    followedPlaylists: {
      1:  {
        id: 1
        title: "Redux",
        userId: 3,
        description: "description",
        playlistFollowId: 3,
        coverUrl: "http:/path/to/cover",
         tracks: [
          {
            id: 1,
            title: "Redux",
            user_id: 3,
            description: "description",
            coverUrl: "http://path/to/cover",
            audioUrl: "http://path/to/audio",
            playlist_track_id: 5
          }
        ]
      }
    }
  },
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
  // loading spinner status
  loading: false,
  // browse playlists
  playlists: [
     {
        id: 5,
        title: "Redux",
        user_id: 3,
        description: "description",
        coverUrl: "http:/path/to/cover"
      }
  ],
  //vieweing a playlist page
  playlistDetail: {
    id: 1,
    title: "Redux",
    description: "lorem ipsum descritption",
    playlistFollowId: 3,
    userId: 4,
    tracks: [
       1:  {
          id: 1,
          title: "Redux",
          user_id: 3,
          description: "description",
          coverUrl: "http://path/to/cover",
          audioUrl: "http://path/to/audio",
          playlist_track_id: 1
        }
    ]
  },
  //browse tracks or viewing created tracks
  tracks: {
    1:  {
          id: 1,
          title: "Redux",
          user_id: 3,
          description: "description",
          coverUrl: "http://path/to/cover",
          audioUrl: "http://path/to/audio",
          playlist_track_id: 1
        }
  },
  //user index
  users: {
    3: {
        id: 3,
        username: "username",
        bio: "bio",
        userId: 3,
        userFollowId: 7,
        profileImageUrl: "http:/path/to/cover"
      }
  },
  //viewing a single user page
  userDetail: {
    user:  {
        id: 3
        username: "username",
        bio: "bio",
        user_id: 3,
        userFollowId: 8,
        profileImageUrl: "http:/path/to/cover"
    },
    playlists: {
      1: {
          id: 1
          title: "Redux",
          userId: 3,
          description: "description",
          coverUrl: "http:/path/to/cover"
      }
    }
  }
}
