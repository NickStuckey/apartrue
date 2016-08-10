const ReviewApiUtil = {
  createReview (formData, success) {
    $.ajax({
      url: `api/reviews`,
      type: "POST",
      contentType: false,
      processData: false,
      data: formData,
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
  },

  removeReview (id, success) {
    $.ajax({
      url: `api/reviews/${id}`,
      type: `DELETE`,
      success,
      error: (xhr) => {
        const error = xhr.responseJSON;
        console.log('removeReview', error);
      }
    });
  }
};

module.exports = ReviewApiUtil;
