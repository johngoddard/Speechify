class Api::UsersController < ApplicationController
  USER_ATTRS = [
    :username,
    :password,
    :description,
    :profile_image_url,
    :image_file_type,
    :image_file_size
  ]

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
    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(*USER_ATTRS)
  end
end