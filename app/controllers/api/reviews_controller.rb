class Api::ReviewsController < ApplicationController
  def index
    if review_params[:property_id]
      @reviews = Review.where(property_id: review_params[:property_id])
    elsif review_params[:user_id]
      @reviews = Review.where(author_id: review_params[:user_id])
    else
      @reviews = Review.all
    end

    # usefull for updating seeds
    @reviews.each { |r|
      r.add_author if !r.author_name
    }

    if @reviews
      render "api/reviews/index"
    else
      render json: ['no reviews found']
    end
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    @review.add_author

    if @review.save
      @review.property.update_rating_averages!
      render "api/reviews/show"
    else
      render json: @review.errors
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    @review.property.update_rating_averages!
    render "api/reviews/show"
  end

  def review_params
    params.require(:review).permit(
      :title, :body, :property_rating, :landlord_rating, :image, :property_id, :user_id
      )
  end
end
