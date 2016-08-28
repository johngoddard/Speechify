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
  currentPlaylists: { 
    playlists: {
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
    },
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
  loading: false,
  playlists: [
     {
        id: 5,
        title: "Redux",
        user_id: 3,
        description: "description",
        coverUrl: "http:/path/to/cover"
      }
  ],
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
          user_id: 3,
          description: "description",
          coverUrl: "http:/path/to/cover"
      }
    }
  }
}

```
