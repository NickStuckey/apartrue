const ReviewApiUtil = {
  createReview (review, success) {
    $.ajax({
      url: `api/reviews`,
      type: "POST",
      data: {review: {
        title: review.title,
        body: review.body,
        landlord_rating: review.landlordRating,
        property_rating: review.propertyRating,
        property_id: review.propertyId
      }},
      success,
      error: (xhr) => {
        const error = xhr.responseJSON;
        console.log('createReview', error);
      }
    });
  },

  fetchPropertyReviews (id, success) {
    $.ajax({
      url: `api/reviews`,
      type: "GET",
      data: {review: {property_id: id}},
      success,
      error: (xhr) => {
        const error = xhr.responseJSON;
        console.log('fetchPropertyReviews', error);
      }
    });
  }
};

module.exports = ReviewApiUtil;
