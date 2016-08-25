const React = require('react'),
      SessionStore = require('../stores/session_store'),
      ReviewActions = require('../actions/review_actions');

const SingleReview = React.createClass({
  getInitialState () {
    return ({review: this.props.review});
  },

  deleteReview () {
    ReviewActions.deleteReview(this.state.review.id);
  },

  drawPropertyRating () {
    const rating = this.state.review.property_rating;
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("★");
    }

    return (<p className="single-review-avg-stars">{stars.join('')}</p>);
  },

  drawLandlordRating () {
    const rating = this.state.review.landlord_rating;
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("★");
    }

    return (<p className="single-review-avg-stars">{stars.join('')}</p>);
  },

  render () {
    let propRating, lordRating, deleteButtonOption, auth_id;
    const review = this.state.review;
    if (review) {
      auth_id = review.author_id;
      propRating = this.drawPropertyRating();
      lordRating = this.drawLandlordRating();
    }

    if (SessionStore.isUserLoggedIn() && SessionStore.currentUser().id === auth_id) {
      deleteButtonOption = <button
        onClick={this.deleteReview}
        className="delete-button"
        >delete</button>;
    }

    return (
      <li key={review.id} className="review-wrapper group">
        <ul className="single-review-star-ratings">
          <li className="single-review-star-wrapper">
            <p className="single-review-star-label">Property</p>
            {propRating}
          </li>
          <li className="single-review-star-wrapper">
            <p className="single-review-star-label">Landlord</p>
            {lordRating}
          </li>
        </ul>
        <h1 className="review-title">{ review.title }</h1>
        <p className="review-body">{ review.body }</p>
        <div className="delete-button-place-holder">
          {deleteButtonOption}
        </div>
      </li>
    );
  }
});

module.exports = SingleReview;
