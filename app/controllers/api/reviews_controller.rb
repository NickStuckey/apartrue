class Api::ReviewsController < ApplicationController
  def index
    debugger
    @reviews = Review.find_by_property_id(review_params[:propertyId])

    debugger
    if @reviews
      render "api/reviews/index"
    else
      render :json ['no reviews found']
    end
  end

  def create
    @review = review_params
    @review.user_id = current_user.id

    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors
    end
  end

  def destroy

  end

  def review_params
    params.require(:review).permit(:title, :body, :property_rating, :landlord_rating, :propertyId)
  end
end
