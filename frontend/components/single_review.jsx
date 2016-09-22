const React = require('react'),
      SessionStore = require('../stores/session_store'),
      hashHistory = require('react-router').hashHistory,
      ReviewActions = require('../actions/review_actions');

const SingleReview = React.createClass({
  getInitialState () {
    return ({review: this.props.review, author: ""});
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

  userPage () {
    const userId = this.state.review.author_id;
    hashHistory.push(`/users/${userId}`);
  },

  propertyPage () {
    const propId = this.state.review.property_id;
    hashHistory.push(`/properties/${propId}`);
  },

  render () {
    let propRating, lordRating, deleteButtonOption, authorId, authorName;
    const review = this.state.review;
    if (review) {
      authorId = review.author_id;
      authorName = review.author_name;
      propRating = this.drawPropertyRating();
      lordRating = this.drawLandlordRating();
    }

    if (SessionStore.isUserLoggedIn() && SessionStore.currentUser().id === authorId) {
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
        <a className="review-title hoverable" onClick={this.propertyPage}>{ review.title }</a>
        <a className="user-name hoverable" onClick={this.userPage}> by {authorName}</a>
        <p className="review-body">{ review.body }</p>
        <div className="delete-button-place-holder">
          {deleteButtonOption}
        </div>
      </li>
    );
  }
});

module.exports = SingleReview;
