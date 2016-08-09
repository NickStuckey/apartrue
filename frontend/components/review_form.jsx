const React = require('react'),
      ReviewActions = require('../actions/review_actions'),
      SessionStore = require('../stores/session_store'),
      ReviewStore = require('../stores/review_store');

const ReviewForm = React.createClass({
  getInitialState () {
    const propId = this.props.params.propertyId;
    return ({
      title: "",
      body: "",
      landlordRating: null,
      propertyRating: null,
      propertyId: propId
    });
  },

  componentDidMount () {
    this.reviewListener = ReviewStore.addListener(this._onChange);
  },

  _onChange () {
    // NOTE propbably don't need to redirect, just put a listener on the review
    // store in the property show, so it will update when a new review is added
  },

  updateLandlordRating (e) {
    this.setState({title: e.taget.id});
  },

  updatePropertyRating (e) {
    this.setState({propertyRating: e.target.id});
  },

  updateTitle (e) {
    this.setState({title: e.target.value});
  },

  updateBody (e) {
    this.setState({body: e.target.value});
  },

  handleSubmit () {
    ReviewActions.createReview(this.state);

  },

  render () {
    return (
      <div>
        <form className="review-form">
          <div class="landlord-rating">
            <span onClick={this.updateLandlordRating} id="1">☆</span>
            <span onClick={this.updateLandlordRating} id="2">☆</span>
            <span onClick={this.updateLandlordRating} id="3">☆</span>
            <span onClick={this.updateLandlordRating} id="4">☆</span>
            <span onClick={this.updateLandlordRating} id="5">☆</span>
          </div>
          <div class="property-rating">
            <span onClick={this.updatePropertyRating} id="1">☆</span>
            <span onClick={this.updatePropertyRating} id="2">☆</span>
            <span onClick={this.updatePropertyRating} id="3">☆</span>
            <span onClick={this.updatePropertyRating} id="4">☆</span>
            <span onClick={this.updatePropertyRating} id="5">☆</span>
          </div>
          <input
            type="text"
            placeholder="title"
            onChange={this.updateTitle}
            value={this.props.title}
          />
          <textarea
            placeholder="Leave a review"
            onChange={this.updateBody}
            value={this.props.body}
          />
          <input
            type="submit"
            className="button submit-button"
            onClick={this.handleSubmit}
            />
        </form>
      </div>
    );
  }
});
