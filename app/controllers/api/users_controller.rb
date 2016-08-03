class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors, status: 422
    end
  end

  def delete
    @user = current_user
    if @user.delete
      render {}
    else
      render @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :hometown)
  end

end
