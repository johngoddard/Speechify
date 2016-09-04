class Api::UsersController < ApplicationController

  USER_ATTRS = [
    :username,
    :password,
    :description,
    :profile_image_url,
    :image_file_type,
    :image_file_size
  ]

  before_action :find_user, only: [:update, :show, :follow, :unfollow]
  before_action :ensure_current_user, only: [:follow, :unfollow]

  def index
    if current_user && params[:curr_user] == 'true'
      @users = current_user.followees
      render 'api/users/index'
    else
      @users = User.all
      render 'api/users/index'
    end
  end

  def create
    @user = User.new(user_params);

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    rener 'api/users/show'
  end

  def follow
    if UserFollow.create(follower_id: current_user.id, followee_id: params[:id])
      render 'api/users/show'
    else
      render json: ["Could not follow user"], status: 422
    end
  end

  def unfollow
    user_follow = UserFollow.find_by(follower_id: current_user.id, followee_id: params[:id])
    if user_follow && user_follow.destroy
      render 'api/users/show'
    else
      render json: ["Could not unfollow user"], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(*USER_ATTRS)
  end

  def find_user
    @user = User.find_by(id: params[:id])
    unless @user
      render json: ["User not found"], status: 404
    end

    @user
  end
end
