const React = require('react'),
      ReviewActions = require('../actions/review_actions'),
      SessionStore = require('../stores/session_store'),
      PropertyActions = require('../actions/property_actions'),
      PropertyStore = require('../stores/property_store'),
      ReviewStore = require('../stores/review_store');

const ReviewForm = React.createClass({
  getInitialState () {
    const propId = this.props.propertyId;
    return ({
      title: "",
      body: "",
      landlordRating: null,
      propertyRating: null,
      propertyId: propId,
    });
  },

  componentWillUnmount () {
    this.reviewListener.remove();
  },

  updateLandlordRating (e) {
    this.setState({landlordRating: e.target.id});
    this.forceUpdate();
  },

  updatePropertyRating (e) {
    this.setState({propertyRating: e.target.id});
    this.forceUpdate();
  },

  updateTitle (e) {
    this.setState({title: e.target.value});
  },

  updateBody (e) {
    this.setState({body: e.target.value});
  },

  handleSubmit (e) {
    e.preventDefault();

    ReviewActions.createReview(this.state);
  },

  selectedPropStar(star) {
    const rank = this.state.propertyRating;

    if (star <= rank) {
      return "selected-star";
    } else {
      return;
    }
  },

  selectedLordStar(star) {
    const rank = this.state.landlordRating;

    if (star <= rank) {
      return "selected-star";
    } else {
      return;
    }
  },

  render () {
    return (
      <div>
        <h1>REVIEW FORM</h1>
        <form className="review-form">
          <div className="landlord-rating">
            <h4>Landlord rating </h4>
            <span onClick={this.updateLandlordRating} className={this.selectedLordStar(5)} id="5">☆</span>
            <span onClick={this.updateLandlordRating} className={this.selectedLordStar(4)} id="4">☆</span>
            <span onClick={this.updateLandlordRating} className={this.selectedLordStar(3)} id="3">☆</span>
            <span onClick={this.updateLandlordRating} className={this.selectedLordStar(2)} id="2">☆</span>
            <span onClick={this.updateLandlordRating} className={this.selectedLordStar(1)} id="1">☆</span>
          </div>
          <div className="property-rating">
            <h4>Property rating </h4>
            <span onClick={this.updatePropertyRating} className={this.selectedPropStar(5)} id="5">☆</span>
            <span onClick={this.updatePropertyRating} className={this.selectedPropStar(4)} id="4">☆</span>
            <span onClick={this.updatePropertyRating} className={this.selectedPropStar(3)} id="3">☆</span>
            <span onClick={this.updatePropertyRating} className={this.selectedPropStar(2)} id="2">☆</span>
            <span onClick={this.updatePropertyRating} className={this.selectedPropStar(1)} id="1">☆</span>
          </div>
          <input
            type="text"
            className="title-input-field"
            placeholder="title"
            onChange={this.updateTitle}
            value={this.props.title}
            />
          <textarea
            className="review-text-area"
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

module.exports = ReviewForm;
