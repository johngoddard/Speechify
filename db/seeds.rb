# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'DemoUser', password: 'password', description: "Welcome to Speechify! Use your Bio to tell a little bit about yourself, and connect with other users who have similar interests!", profile_image_url: 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472833259/images/ywtjgoxudg2ahpuxupdp.png')
User.create(username: 'KyloRen', password: 'password', description: "Kylo Ren is a fictional character in the Star Wars franchise. Introduced in the 2015 film Star Wars: The Force Awakens, he is portrayed by Adam Driver. Kylo Ren is the nom de guerre of Ben Solo,[1][2] the son of original Star Wars trilogy characters Han Solo and Leia Organa. Though trained by his uncle Luke Skywalker as a Jedi, he has been seduced to the dark side of the Force by Supreme Leader Snoke, and aspires to be as powerful as his grandfather, Darth Vader.", profile_image_url: 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1473129308/images/qyerqeda5uryclamigdt.png')
User.create(username: 'Darth Vader', password: 'password', description: "I joined Speechify to get inspired for my speeches in front for the empire. Looking to connect with fellow toast masters!", profile_image_url: 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1473129352/images/ea7uoheacoegcvkr8v3u.png')
User.create(username: 'nauticaljack', password: 'pass', description: "Welcome to Speechify! Use your Bio to tell a little bit about yourself, and connect with other users who have similar interests!", profile_image_url: 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1473129386/images/evyfztglpkaku5i3piv9.png')


Track.create(title: 'We go to the Moon', artist: 'John F. Kennedy', user_id: 3, track_image_url: 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1473109710/images/gvjo2efmut0flsyvavkg.png', audio_url: 'http://res.cloudinary.com/dwf6beu4e/video/upload/v1473109702/lrm94k7dcq06cjf3hk3e.mp3')
Track.create(title: 'Miracle on Ice Speech', artist: 'Herb Brooks', user_id: 3, track_image_url: "http://res.cloudinary.com/dwf6beu4e/image/upload/v1472757301/images/k1pdcy3zlrsbyvmfccsx.png", audio_url: 'http://res.cloudinary.com/dwf6beu4e/video/upload/v1473126993/xku9cjgzv3muutlbsd7l.mp3')
Track.create(title: 'Prom Speech', artist: 'Cady Heron', user_id: 4, track_image_url: 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472757395/images/lktb4nisv5ck9cbokkn3.png', audio_url: 'http://res.cloudinary.com/dwf6beu4e/video/upload/v1473126523/sekp7r3ab7yx0hwtafxe.mp3')
Track.create(title: 'RNC Highlights', artist: 'Donald Trump', user_id: 1, track_image_url: 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472779972/images/fiwheba3gfdo6sjio9ox.png', audio_url: 'http://res.cloudinary.com/dwf6beu4e/video/upload/v1473127665/uv32fm5tn6vsgsf364uv.mp3')
Track.create(title: 'DNC Highlights', artist: 'Hillary Clinton', user_id: 1, track_image_url: 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1473127159/images/qbs4dqox12ycaxel3imq.png', audio_url: "http://res.cloudinary.com/dwf6beu4e/video/upload/v1473127417/ep3dcw4xlmreubmorfqe.mp3")
Track.create(title: 'Any Given Sunday', artist: 'Al Pacino', user_id: 2, track_image_url: 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472779871/images/mn8gcpwg75l97p2oje0b.png', audio_url: 'http://res.cloudinary.com/dwf6beu4e/video/upload/v1473126400/wi8dtbavpe7f11yccu5t.mp3')
Track.create(title: 'Gettysburg Address (performed by Jeff Daniels)', artist: 'Abraham Lincoln', user_id: 1, audio_url: 'http://res.cloudinary.com/dwf6beu4e/video/upload/v1473119865/qm8kqaykp8vite0zhswo.mp3', track_image_url: 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1473133351/images/okznnid1yimz45dcowfy.png')

Playlist.create(user_id: 1, title: 'Politics', description: "This is a playlist about Politics! Use playlists to make and share collections of your favorite speeches.")
Playlist.create(user_id: 2, title: 'Sports', description: "This is a playlist about Sports! Use playlists to make and share collections of your favorite speeches.")
Playlist.create(user_id: 1, title: 'Empty playlist', description: "This is an empty playlist");

PlaylistTrack.create(playlist_id: 1, track_id: 1, order: 0)
PlaylistTrack.create(playlist_id: 1, track_id: 4, order: 1)
PlaylistTrack.create(playlist_id: 1, track_id: 5, order: 2)
PlaylistTrack.create(playlist_id: 1, track_id: 7, order: 3)

PlaylistTrack.create(playlist_id: 2, track_id: 2, order: 0)
PlaylistTrack.create(playlist_id: 2, track_id: 6, order: 1)

PlaylistFollow.create(user_id: 1, playlist_id: 2)

UserFollow.create(follower_id: 1, followee_id: 2)
UserFollow.create(follower_id: 1, followee_id: 3)
