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

  def show

  end

  def delete

  end

end
