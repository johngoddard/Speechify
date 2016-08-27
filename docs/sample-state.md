```json
{
  currentUser: {
    id: 1,
    email: "test@gmail.com", 
    username: "nauticaljack", 
    playlists: [
      {
        title: "Redux",
        user_id: 3
      }
    ]
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
    createTrack: {errors: ["title can't be blank"]}, 
    playlist: {}, 
    user: {}
  },
  currentTrack: {
    track:  {
        title: "Redux",
        user_id: 3, 
        description: 'description', 
        coverUrl: 'http://path/to/cover', 
        audioUrl: 'http://path/to/audio
      }
    trackQueue: [track1, track2, track3], 
    trackPosition: 2000]
  },
  playing: true, 
  loading: false, 
  playlistDetail: {
    id: 1,
    title: "Redux",
    description: 'lorem ipsum descritption',
    user_id: 4, 
    tracks: [
      {
        title: "Redux",
        user_id: 3, 
        description: 'description', 
        coverUrl: 'http://path/to/cover', 
        audioUrl: 'http://path/to/audio
      }
    ]
  }, 
  playlists: [
     {
        title: "Redux",
        user_id: 3, 
        description: 'description', 
        follows: false, 
        coverUrl: 'http:/path/to/cover'
      }
  ], 
  tracks: [
     {
        title: "Redux",
        user_id: 3, 
        description: 'description', 
        coverUrl: 'http://path/to/cover', 
        audioUrl: 'http://path/to/audio
      }
  ],
  users: [
     {
        username: "username", 
        bio: "bio", 
        user_id: 3, 
        follows: false, 
        profileImageUrl: 'http:/path/to/cover', 
      }
  ], 
  userDetail: [
    user:  {
        username: "username", 
        bio: "bio", 
        user_id: 3, 
        follows: false, 
        profileImageUrl: 'http:/path/to/cover', 
      }, 
    playlists: [
       {
        title: "Redux",
        user_id: 3, 
        description: 'description', 
        follows: false, 
        coverUrl: 'http:/path/to/cover'
      }
    ]
  ],
  playListDetail: {
    title: "Playlist title", 
    description: "playlist description", 
    Tracks: [
       {
        title: "Redux",
        user_id: 3, 
        description: 'description', 
        coverUrl: 'http://path/to/cover', 
        audioUrl: 'http://path/to/audio
      }
    ]
  }
}
```
