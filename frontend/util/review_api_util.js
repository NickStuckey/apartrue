const ReviewApiUtil = {
  createReview (review) {
    $.ajax({
      url: `api/review`,
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
      data: {property: {propertyId: id}},
      success,
      error: (xhr) => {
        const error = xhr.responseJSON;
        console.log('fetchPropertyReviews', error);
      }
    });
  }
};

module.exports = ReviewApiUtil;
