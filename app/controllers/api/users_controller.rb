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

  def update
    @user = User.find(user_params[:id])

    user_para = {}
    user_params.keys.each do |param|
      user_para[param]= user_params[param] if user_params[param] != "undefined"
    end

    if @user.update_attributes(user_para)
      render "api/users/show"
    else
      render json: @user.errors
    end
  end

  def show
    @user = User.find(params[:id])

    if @user
      render "api/users/show"
    else
      render json: ["unable to find user"]
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
    params.require(:user).permit(
    :username, :password, :hometown, :image, :is_landlord, :bio, :id
    )
  end

end
