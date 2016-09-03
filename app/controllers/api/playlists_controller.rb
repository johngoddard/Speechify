class Api::PlaylistsController < ApplicationController

  PLAYLIST_ATTRS = [
    :title,
    :description,
    :user_id,
    :playlist_image_url
  ]

  before_action :find_playlist, only: [:update, :destroy, :add_track, :remove_track, :follow, :unfollow]
  before_action :ensure_current_user, only: [:unfollow, :follow, :update, :create, :destroy]

  def index
    if params[:user_id] && params[:with_tracks] == 'true'
      @playlists = Playlist.where(user_id: params[:user_id].to_i).includes(:tracks, :playlist_tracks, :user)
      render 'api/playlists/index_detail'
    elsif params[:user_id]
      @playlists = Playlist.where(user_id: params[:user_id].to_i).includes(:tracks).includes(:user)
      render 'api/playlists/index'
    elsif params[:followed] == 'true'
      puts '------------------------------------------------------------------'
      @playlists = current_user.followed_playlists.includes(:playlist_follows);
      render 'api/playlists/follow_index'
    else
      @playlists = Playlist.all.includes(:tracks).includes(:user)
      render 'api/playlists/index'
    end
  end

  def create
    @playlist = current_user.playlists.new(playlist_params)
    if @playlist.save
      render 'api/playlists/detail_show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    if @playlist.user_id != current_user.id
      render json: ["You can not edit that track"], status: 422
    else
      if @playlist.update(playlist_params)
        render 'api/playlists/detail_show'
      else
        render json: @playlist.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    if @playlist.user_id != current_user.id
      render json: ["You can not delete that playlist"], status: 422
    else
      if @playlist.destroy
        render 'api/playlists/show'
      else
        render json: ["Could not delete playlist"], status: 422
      end
    end
  end

  def show
    @playlist = Playlist.where(id: params[:id]).includes(:tracks, :playlist_tracks, :user)[0]
    if @playlist
      render 'api/playlists/detail_show'
    else
      render ["Playlist not found"], status: 404
    end
  end

  def add_track
    track = Track.find_by(id: params[:track_id])
    ord = @playlist.max_track ? @playlist.max_track + 1 : 0

    if track && PlaylistTrack.create(playlist_id: @playlist.id, track_id: track.id, order: ord)
      render 'api/playlists/detail_show'
    else
      render json: ["Could not add track to playlist"], status: 422
    end
  end

  def remove_track
    track = Track.find_by(id: params[:track_id]);

    if track && @playlist.tracks.include?(track) && @playlist.user_id == current_user.id
      playlist_track = PlaylistTrack.find_by(playlist_id: @playlist.id, track_id: track.id)

      if playlist_track.destroy()
        render 'api/playlists/detail_show'
      else
        render json: ["Could not remove track from playlist"], status: 422
      end
    else
      render json: ["Could not remove track from playlist"], status: 422
    end
  end

  def follow
    if PlaylistFollow.create(user_id: current_user.id, playlist_id: params[:id])
      render 'api/playlists/follow_show'
    else
      render json: ["Could not add track to playlist"], status: 422
    end
  end

  def unfollow
    playlist_follow = PlaylistFollow.find_by(user_id: current_user.id, playlist_id: params[:id])
    if playlist_follow.destroy
      render 'api/playlists/show'
    else
      render json: ["Could unfollow playlist"], status: 422
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(*PLAYLIST_ATTRS)
  end

  def find_playlist
    @playlist = Playlist.find_by(id: params[:id])
    unless @playlist
      render json: ["Playlist not found"], status: 404
    end
    @playlist
  end
end
