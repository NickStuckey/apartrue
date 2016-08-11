const React = require('react'),
      ReviewActions = require('../actions/review_actions');

const SingleReview = React.createClass({
  getInitialState () {
    return ({review: this.props.review});
  },

  deleteReview () {
    ReviewActions.deleteReview(this.state.review.id);
  },

  render () {
    const review = this.state.review;
    return (
      <li key={review.id} className="review-wrapper">
        <h3 className="personal-rating">Property rating: { review.property_rating }</h3>
        <h3 className="personal-rating">Landlord rating: { review.landlord_rating }</h3>
        <h1 className="review-title">{ review.title }</h1>
        <p className="review-body">{ review.body }</p>
        <button className="button delete-review" onClick={this.deleteReview}>Delete</button>
      </li>
    );
  }
});

module.exports = SingleReview;
