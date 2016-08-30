class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if current_user
      logout!
      render "api/users/show"
    else
      render json: ["Nobody is signed in"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
