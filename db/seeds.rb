# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'DemoUser', password: 'password', description: "Welcome to Speechify! Use your Bio to tell a little bit about yourself, and connect with other users who have similar interests!", profile_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473383232/images/cjb1jmnxm9fl2uuvkoox.png')
User.create(username: 'Sara4eva', password: 'password', description: "Brooklyn-based aspiring actress. I'm here to research an upcoming role as an extra in a period piece!", profile_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473379127/images/q6s5gpjas8cmp6lq7xrd.png')
User.create(username: 'MrHistory', password: 'pass', description: "History buff extroadinaire. Yale scholar and the world's second foremost expert on pre-colonial North American trade patterns.", profile_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473378857/images/bvjiyzcnqrtp80smipy0.png')
User.create(username: 'TheChamp', password: 'pass', description: "1997 and 1999 NCAA debate national champion. I have tremendous admiration for great speakers, past and present, and I'm here to try and join their ranks. ", profile_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473381210/images/nsdyvqddgksslclh7xh8.png')
User.create(username: 'stevejackson', password: 'pass', description: "Longtime toastmaster and lover of great speeches. I'm here to brush up on the art of rhetoric.", profile_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473378466/images/om4gmsymoknsgu8e8s1a.png')

User.create(username: 'Yoda', password: 'pass', description: "\"Do. Or do not. There is no try.\" That's the motto that I live by.", profile_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473381261/images/ahjs7fj6vcazzlxhpiob.png')
User.create(username: 'lindaS', password: 'pass', description: "Fortune 500 exectutive. The brains of the operation. I joined Speechify to learn from the best.", profile_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473378957/images/rnorwav1q2ih5yac0uzy.png')
User.create(username: 'nauticaljack', password: 'pass', description: "Argh, I be here to work on my oration in front of my maties!", profile_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473129386/images/evyfztglpkaku5i3piv9.png')

Track.create(title: 'Ducks Fly Together', category: 'entertainment', artist: 'Emilio Estevez', user_id: 2, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473377494/Ducks_Fly_Together_vobd45.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473377466/images/jrfukwobqtaytb4ewcxu.png')
Track.create(title: 'Leave No Doubt', category: 'sports', artist: 'Bill Stewart', user_id: 4, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473375193/BEST_SPEECH_EVER_West_Virginia_Head_Coach_Bill_Stewart_-_Leave_No_Doubt_Speech_2008_r6injc.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473375219/images/nm9ae9fyqchqwdfrscye.png')
Track.create(title: 'War on Terror', category: 'politics', artist: 'George W. Bush', user_id: 7, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473374176/BUSH_Ultimatum_2003_Saddam_Hussein_IRAQ_CBS_NEWS_tgjtfe.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473373612/images/l24glyboyrk9tmj4mz02.png')
Track.create(title: 'Homecoming Speech', artist: 'Cady Heron', category: 'entertainment', user_id: 2, track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1472757395/images/lktb4nisv5ck9cbokkn3.png', audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473126523/sekp7r3ab7yx0hwtafxe.mp3')
Track.create(title: 'Gettysburg Address (performed by Jeff Daniels)', category: 'history', artist: 'Abraham Lincoln', user_id: 1, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473119865/qm8kqaykp8vite0zhswo.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473133351/images/okznnid1yimz45dcowfy.png')

Track.create(title: '1942 USA Speech', category: 'history', artist: 'Winston Churchill', user_id: 3, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473368440/Winston_Churchill_Now_we_are_Masters_of_Our_Fate_Speech_1_gjs5vz.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473368592/images/a9g9nd61yrzf0rrpfvzf.png')
Track.create(title: 'Good Will Hunting NSA Speech', category: 'entertainment', artist: 'Matt Damon', user_id: 6, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473377959/Why_Shouldnt_I_Work_for_the_NSA_Good_Will_Hunting_1_enyang.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473373107/images/fvtt4w4buqgh7wm0nusd.png')
Track.create(title: 'This Is Water', category: '', artist: 'David Foster Wallace', user_id: 6, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473377210/This_Is_Water_by_David_Foster_Wallace_Full_Speech_po0jnj.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473376534/images/m3u7yr88gdf8tt3ayksh.png')
Track.create(title: 'RNC Highlights', artist: 'Donald Trump', category: 'politics', user_id: 5, track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1472779972/images/fiwheba3gfdo6sjio9ox.png', audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473127665/uv32fm5tn6vsgsf364uv.mp3')
Track.create(title: '1993 ESPYs Speech', category: 'sports', artist: 'Jimmy Valvano', user_id: 1, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473369004/Jimmy_Valvano_Inspiring_Speech_on_Cancer_-_1993_ESPY_Awards_c4psja.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473368889/images/y6xchaf4jrmvpjgzwsd5.png')

Track.create(title: 'Indian Hill Brave Pump Up', category: 'sports', artist: 'Tony Arcuri', user_id: 4, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473369763/Greatest_Pre-Game_Football_Speech_of_All_Time_That_wasnt_in_a_movie_igmxll.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473369706/images/qf2x9yiuq1mz0iwebu9s.png')
Track.create(title: 'Yes We Can', category: 'politics', artist: 'Barack Obama', user_id: 1, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473370569/Obama_Yes_We_Can_FULL_-_Famous_Speech_isxo2f.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473370293/images/b0blokzknplhgzpqaxam.png')
Track.create(title: 'Fair Game Speech', category: 'entertainment', artist: 'Sean Penn', user_id: 2, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473373129/One_of_the_best_speeches_ever_produced_in_a_movie_xaqsr5.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473372939/images/qucmipymrp3iau38wu6t.png')
Track.create(title: 'How to Play Chess (The Wire)', category: 'entertainment', artist: 'Lawrence Gilliard Jr', user_id: 8, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473374568/The_Wire_How_To_Play_Chess_d6irkv.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473374455/images/mmapgayxyiv4qb3g5ald.png')
Track.create(title: 'DNC Speech', category: 'politics', artist: 'Michelle Obama', user_id: 6, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473371189/Watch_first_lady_Michelle_Obama_s_full_speech_at_the_2016_Democratic_National_Convention_ohalwe.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473371118/images/gxhzyaj4vvtays4yscj0.png')

Track.create(title: '1941 War Declaration (Infamy Speech)', category: 'history', artist: 'Franklin D. Roosevelt', user_id: 2, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473371860/FDR_DECLARES_WAR_12841_-_Franklin_Delano_Roosevelt_WWII_Infamy_Speech_24400_ri30di.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473371539/images/ljloyh9bnurcwzem0vlc.png')
Track.create(title: 'We go to the Moon', artist: 'John F. Kennedy', category: 'history', user_id: 3, track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473109710/images/gvjo2efmut0flsyvavkg.png', audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473109702/lrm94k7dcq06cjf3hk3e.mp3')
Track.create(title: 'Oscar Speech', category: 'entertainment', artist: 'Cuba Gooding Jr.', user_id: 2, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473370072/Cuba_Gooding_Jr._Wins_Supporting_Actor_1997_Oscars_dnszxk.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473369977/images/elkkmczospk9dfhwdiib.png')
Track.create(title: 'Independence Day', category: 'entertainment', artist: 'Bill Pullman', user_id: 6, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473375435/Independence_Day_1996_-_President_Speech_-_1080P_ilbaau.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473375415/images/ufjoslquuum6sdra6vx0.png')
Track.create(title: 'Carpe Diem (Dead Poets Society)', category: 'entertainment', artist: 'Robin Williams', user_id: 7, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473377375/Carpe_diem._Seize_the_day._-_Dead_Poets_Society_wznptk.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473377277/images/l3vjgnlawd5wj7dchxr6.png')

Track.create(title: 'We Shall Fight on the Beaches', category: 'history', artist: 'Winston Churchill', user_id: 1, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473372443/Winston_S_Churchill_We_Shall_Fight_on_the_Beaches_mw5rv6.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473372393/images/yxfkvcip805odkbybdpz.png')
Track.create(title: '1961 Inaugural Address (Ask Not Passage)', category: 'history', artist: 'John F. Kennedy', user_id: 1, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473372759/JFKs_Famous_Inaugural_Address_Passage_n7qlkq.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473372637/images/fnnai7b63nwwnth2e4xk.png')
Track.create(title: '1933 Inaugural Address (Fear Itself)', category: 'history', artist: 'Franklin D. Roosevelt', user_id: 4, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473371294/Franklin_D._Roosevelt_-_Inaugural_The_Only_Thing_We_Have_to_Fear_is_Fear_Itself_Speech_nytrna.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473371308/images/aysxqbtgccv63zgpynun.png')
Track.create(title: 'DNC Highlights', artist: 'Hillary Clinton', category: 'politics', user_id: 7, track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473127159/images/qbs4dqox12ycaxel3imq.png', audio_url: "https://res.cloudinary.com/dwf6beu4e/video/upload/v1473127417/ep3dcw4xlmreubmorfqe.mp3")
Track.create(title: 'The Struggle Continues', category: 'politics', artist: 'Bernie Sanders', user_id: 6, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473374626/Bernie_Sanders_The_struggle_continues_Full_June_7_speech_mfafgw.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473374099/images/kygrn0dthw9vzzwoeqhc.png')

Track.create(title: 'Any Given Sunday', artist: 'Al Pacino', category: 'sports', user_id: 1, track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1472779871/images/mn8gcpwg75l97p2oje0b.png', audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473126400/wi8dtbavpe7f11yccu5t.mp3')
Track.create(title: 'Leave Your Mark', category: 'sports', artist: 'Ray Lewis', user_id: 2, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473374840/Ray_Lewis_Greatest_Motivational_Speech_of_All_Time_1_mxew5y.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473374805/images/sxrtjxsevdp6r2rm64wf.png')
Track.create(title: 'Farewell Speech', category: 'sports', artist: 'Lou Gehrig', user_id: 1, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473368688/Gehrig_delivers_his_famous_speech_at_Yankee_Stadium_gt4ll9.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473368749/images/rw9cuvgcxrk9r1t6joet.png')
Track.create(title: 'Braveheart Freedom Speech', category: 'entertainment', artist: 'Mel Gibson', user_id: 1, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473369392/Braveheart_Freedom_Speech_HD_hll9kb.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473369320/images/on1wwpwjmjsbbtvl8qif.png')
Track.create(title: 'I Have a Dream', category: 'history', artist: 'Martin Luther King', user_id: 1, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473372033/Martin_Luther_King_Jr._I_Have_A_Dream_Speech_qdfaai.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473371988/images/jagjzcaotbxfwhjazqxd.png')

Track.create(title: 'Finest Hour', category: 'history', artist: 'Winston Churchill', user_id: 2, audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473372252/Winston_Churchill_finest_hour_best_version_ivq2f3.mp3', track_image_url: 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1473372144/images/zxnlipgxwkjlwvgbdm7s.png')
Track.create(title: 'Miracle on Ice Speech', artist: 'Herb Brooks', category: 'sports', user_id: 4, track_image_url: "https://res.cloudinary.com/dwf6beu4e/image/upload/v1472757301/images/k1pdcy3zlrsbyvmfccsx.png", audio_url: 'https://res.cloudinary.com/dwf6beu4e/video/upload/v1473126993/xku9cjgzv3muutlbsd7l.mp3')

Playlist.create(user_id: 1, title: 'Historical', description: "This is a playlist with my favorite historical speeches! Use playlists to make and share collections of your favorite speeches.")

Playlist.create(user_id: 2, title: 'Life inpsiration', description: "All the feels for everyday life.")



Playlist.create(user_id: 1, title: 'Recent Politics', description: "This is a playlist with my favorite politics speeches! Use playlists to make and share collections of your favorite speeches.")


PlaylistTrack.create(playlist_id: 1, track_id: 5, order: 0)
PlaylistTrack.create(playlist_id: 1, track_id: 30, order: 1)
PlaylistTrack.create(playlist_id: 1, track_id: 21, order: 2)
PlaylistTrack.create(playlist_id: 1, track_id: 17, order: 3)
PlaylistTrack.create(playlist_id: 1, track_id: 6, order: 4)

PlaylistTrack.create(playlist_id: 6, track_id: 26, order: 0)
PlaylistTrack.create(playlist_id: 6, track_id: 32, order: 1)
PlaylistTrack.create(playlist_id: 6, track_id: 27, order: 2)
PlaylistTrack.create(playlist_id: 6, track_id: 2, order: 3)

PlaylistTrack.create(playlist_id: 3, track_id: 15, order: 0)
PlaylistTrack.create(playlist_id: 3, track_id: 24, order: 1)
PlaylistTrack.create(playlist_id: 3, track_id: 25, order: 2)
PlaylistTrack.create(playlist_id: 3, track_id: 9, order: 3)

Playlist.create(user_id: 3, title: 'World War II', description: "This is a collection of some of the most famous speeches from the second world war.")

PlaylistTrack.create(playlist_id: 4, track_id: 31, order: 0)
PlaylistTrack.create(playlist_id: 4, track_id: 23, order: 1)
PlaylistTrack.create(playlist_id: 4, track_id: 21, order: 2)
PlaylistTrack.create(playlist_id: 4, track_id: 16, order: 3)

Playlist.create(user_id: 4, title: 'Sports Motivation', description: "A set of speeches to get your blood pumping!")

PlaylistTrack.create(playlist_id: 5, track_id: 26, order: 0)
PlaylistTrack.create(playlist_id: 5, track_id: 32, order: 1)
PlaylistTrack.create(playlist_id: 5, track_id: 27, order: 2)
PlaylistTrack.create(playlist_id: 5, track_id: 10, order: 3)


Playlist.create(user_id: 1, title: 'Pump up', description: "This is a playlist with my favorite sports speeches! Use playlists to make and share collections of your favorite speeches.")

PlaylistTrack.create(playlist_id: 2, track_id: 8, order: 0)
PlaylistTrack.create(playlist_id: 2, track_id: 26, order: 1)
PlaylistTrack.create(playlist_id: 2, track_id: 4, order: 2)
PlaylistTrack.create(playlist_id: 2, track_id: 12, order: 3)
PlaylistTrack.create(playlist_id: 2, track_id: 17, order: 4)

Playlist.create(user_id: 2, title: 'Entertainment', description: "These are some of some of my favorite speeches from TV and the movies <3.")

PlaylistTrack.create(playlist_id: 7, track_id: 14, order: 0)
PlaylistTrack.create(playlist_id: 7, track_id: 13, order: 1)
PlaylistTrack.create(playlist_id: 7, track_id: 4, order: 2)
PlaylistTrack.create(playlist_id: 7, track_id: 20, order: 3)
PlaylistTrack.create(playlist_id: 7, track_id: 7, order: 4)

PlaylistFollow.create(user_id: 2, playlist_id: 1)
PlaylistFollow.create(user_id: 3, playlist_id: 1)
PlaylistFollow.create(user_id: 4, playlist_id: 1)
PlaylistFollow.create(user_id: 6, playlist_id: 1)

PlaylistFollow.create(user_id: 4, playlist_id: 2)
PlaylistFollow.create(user_id: 3, playlist_id: 2)
PlaylistFollow.create(user_id: 5, playlist_id: 2)

PlaylistFollow.create(user_id: 7, playlist_id: 3)
PlaylistFollow.create(user_id: 4, playlist_id: 3)
PlaylistFollow.create(user_id: 3, playlist_id: 3)
PlaylistFollow.create(user_id: 6, playlist_id: 3)
PlaylistFollow.create(user_id: 2, playlist_id: 3)

PlaylistFollow.create(user_id: 8, playlist_id: 1)
PlaylistFollow.create(user_id: 5, playlist_id: 1)
PlaylistFollow.create(user_id: 6, playlist_id: 1)

PlaylistFollow.create(user_id: 7, playlist_id: 6)
PlaylistFollow.create(user_id: 4, playlist_id: 6)
PlaylistFollow.create(user_id: 6, playlist_id: 6)
PlaylistFollow.create(user_id: 3, playlist_id: 6)
PlaylistFollow.create(user_id: 2, playlist_id: 6)

PlaylistFollow.create(user_id: 6, playlist_id: 7)
PlaylistFollow.create(user_id: 3, playlist_id: 7)

UserFollow.create(follower_id: 1, followee_id: 2)
UserFollow.create(follower_id: 1, followee_id: 3)
UserFollow.create(follower_id: 1, followee_id: 5)

UserFollow.create(follower_id: 3, followee_id: 1)
UserFollow.create(follower_id: 5, followee_id: 1)
UserFollow.create(follower_id: 4, followee_id: 1)
UserFollow.create(follower_id: 7, followee_id: 1)

UserFollow.create(follower_id: 8, followee_id: 2)
UserFollow.create(follower_id: 8, followee_id: 7)
UserFollow.create(follower_id: 1, followee_id: 5)
UserFollow.create(follower_id: 7, followee_id: 5)
UserFollow.create(follower_id: 7, followee_id: 8)
UserFollow.create(follower_id: 3, followee_id: 4)
UserFollow.create(follower_id: 3, followee_id: 2)
UserFollow.create(follower_id: 3, followee_id: 4)
UserFollow.create(follower_id: 4, followee_id: 2)
