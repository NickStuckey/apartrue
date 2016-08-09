const ReviewApiUtil = require('../util/review_api_util'),
      ReviewConstants = require('../constants/review_constants'),
      AppDispatcher = require('../dispatcher/dispatcher');

const ReviewActions = {
  createReview (review) {
    ReviewApiUtil.createReview(review, this.receiveReview);
  },

  fetchPropertyReviews (propId) {
    ReviewApiUtil.fetchPropertyReviews(propId, this.receiveAllReviews);
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
  }
};

module.exports = ReviewActions;
