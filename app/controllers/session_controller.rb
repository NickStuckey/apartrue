class SessionController < ApplicationController
  def new
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )

    if @user
      sign_in(@user)
      render @user
    else
      render @user.errors.fullmessages
    end
  end

  def delete
    @user = current_user

    if @user
      sign_out
      render {}
    else
      render @user.errors.fullmessages
    end
  end
end
