const ReviewApiUtil = require('../util/review_api_util'),
      ReviewConstants = require('../constants/review_constants'),
      AppDispatcher = require('../dispatcher/dispatcher');

const ReviewActions = {
  createReview (review) {
    ReviewApiUtil.createReview(review, this.receiveReview);
  },

  deleteReview (reviewId){
    ReviewApiUtil.removeReview(reviewId, this.removeReview);
  },

  fetchPropertyReviews (propId) {
    ReviewApiUtil.fetchPropertyReviews(propId, this.receiveAllReviews);
  },

  fetchUserReviews (userId) {
    // NOTE to do
  },

  receiveAllReviews (reviews) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.RESET_REVIEWS,
      reviews: reviews
    });
  },

  receiveReview (review) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.CREATE_REVIEW,
      review: review
    });
  },

  removeReview (review) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REMOVE_REVIEW,
      review: review
    });
  }
};

module.exports = ReviewActions;
