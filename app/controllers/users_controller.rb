class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render @user
    else
      render @user.errors
    end
  end

  def delete
    @user = current_user
    if @user.delete
      render {}
    else
      render @user.errors
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :hometown)
  end

end
