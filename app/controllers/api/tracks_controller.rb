class Api::TracksController < ApplicationController

  TRACK_ATTRS = [
    :title,
    :user_id,
    :artist,
    :track_image_url,
    :image_file_type,
    :image_file_size,
    :audio_url,
    :track_file_name
  ]

  before_action :find_track, only: [:update, :destroy]

  def index
    if params[:user] == 'true'
      if !current_user
        render json: ["You must be signed in to view these tracks"], status: 401
      else
        @tracks = current_user.tracks
        render 'api/tracks/index'
      end
    else
      @tracks = Track.all
      render 'api/tracks/index'
    end

  end

  def create
    if !current_user
      render json: ["You must be signed in to create tracks"], status: 401
    else
      @track = current_user.tracks.new(track_params)
      if @track.save
        render 'api/tracks/show'
      else
        render json: @track.errors.full_messages, status: 422
      end
    end
  end

  def update
    if !current_user || @track.user_id != current_user.id
      render json: ["You can not edit that track"], status: 422
    else
      if @track.update(track_params)
        render 'api/tracks/show'
      else
        render json: @track.errors.full_messages, status: 422
      end
    end
  end

  def show

  end

  def destroy
    if !current_user || @track.user_id != current_user.id
      render json: ["You can not delete that track"], status: 422
    else
      if @track.destroy
        render 'api/tracks/show'
      else
        render json: ["Could not delete track"], status: 422
      end
    end
  end

  private

  def track_params
    params.require(:track).permit(*TRACK_ATTRS)
  end

  def find_track
    @track = Track.find_by(id: params[:id])
  end
end
