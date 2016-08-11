const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher'),
      ReviewConstants = require('../constants/review_constants');

const ReviewStore = new Store(AppDispatcher);
let _reviews = {};

const addReview = function (review) {
  _reviews[review.id] = review;
  ReviewStore.__emitChange();
};

const resetReviews = function (reviews) {
  _reviews = reviews;
  ReviewStore.__emitChange();
};

const removeReview = function (review) {
  delete _reviews[review.id];
  ReviewStore.__emitChange();
};

ReviewStore.all = function () {
  return Object.assign({}, _reviews);
};

ReviewStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ReviewConstants.CREATE_REVIEW:
      addReview(payload.review);
      break;
    case ReviewConstants.RESET_REVIEWS:
      resetReviews(payload.reviews);
      break;
    case ReviewConstants.REMOVE_REVIEW:
      removeReview(payload.review);
      break;
  }
};

module.exports = ReviewStore;
