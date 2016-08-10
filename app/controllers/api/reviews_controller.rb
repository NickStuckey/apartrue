class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.find_all_for_property(review_params[:property_id])

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
    
  end

  def review_params
    params.require(:review).permit(
    :title, :body, :property_rating, :landlord_rating, :property_id)
  end
end
