class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:username])
    if @user
      login(@user)
      render
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ['No one to log out'], status: 404
    end
  end
end
