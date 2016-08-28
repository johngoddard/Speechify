# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
description     | text      |
profile_image_url   | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
artist      | string    | not null
track_image_url   | string    |
user_id     | integer   | not null, foreign key (references users), indexed


## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null,
description | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
playlist_image_url   | string    |

## playlist_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer    | not null, foreign key (references users), indexed
playlist_id | integer   | not null, foreign key (references playlists), indexed


## user_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed

## playlist_tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
playlist_id | integer   | not null, foreign key (references playlists), indexed
track_id    | integer   | not null, foreign key (references tracks), indexed
