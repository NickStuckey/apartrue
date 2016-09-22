class Api::SessionsController < ApplicationController
  def create
    # debugger 
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      render json: {"login" => ["Invalid credentials"]}, status: 401
    end
  end

  def destroy
    sign_out
    render json: {}
  end
end
