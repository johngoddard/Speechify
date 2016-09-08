class Api::SearchController < ApplicationController
  def index
    @tracks = Track.where("lower(artist) LIKE :query OR lower(title) LIKE :query", query: "%#{search_params[:query].downcase}%")
    @playlists = Playlist.where("lower(title) LIKE :query", query: "%#{search_params[:query].downcase}%")
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
