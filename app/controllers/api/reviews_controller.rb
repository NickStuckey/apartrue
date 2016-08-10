class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(property_id: review_params[:property_id])
    if @reviews
      render "api/reviews/index"
    else
      render :json ['no reviews found']
    end
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id

    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.delete
    render "api/reviews/show"
  end

  def review_params
    params.require(:review).permit(
    :title, :body, :property_rating, :landlord_rating, :image, :property_id)
  end
end
