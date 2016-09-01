class Api::PlaylistsController < ApplicationController

  PLAYLIST_ATTRS = [
    :title,
    :description,
    :user_id,
    :playlist_image_url
  ]

  before_action :find_playlist, only: [:update, :destroy]

  def index
    if params[:user_id] && params[:with_tracks] == 'true'
      @playlists = Playlist.where(user_id: params[:user_id].to_i).includes(:tracks)
      render 'api/playlists/index_detail'
    elsif params[:user_id]
      @playlists = Playlist.where(user_id: params[:user_id].to_i)
      render 'api/playlists/index'
    else
      @playlists = Playlist.all
      render 'api/playlists/index'
    end
  end

  def create
    if !current_user
      render json: ["You must be signed in to create playlists"], status: 401
    else
      @playlist = current_user.playlists.new(playlist_params)
      if @playlist.save
        render 'api/playlists/detail_show'
      else
        render json: @playlist.errors.full_messages, status: 422
      end
    end
  end

  def update
    if !current_user || @playlist.user_id != current_user.id
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
    if !current_user || @playlist.user_id != current_user.id
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
    @playlist = Playlist.where(id: params[:id]).includes(:tracks)[0]
    render 'api/playlists/show'
  end

  private

  def playlist_params
    params.require(:playlist).permit(*PLAYLIST_ATTRS)
  end

  def find_playlist
    @playlist = Playlist.find_by(id: params[:id])
  end
end
