const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      SinglePropertyMap = require('./single_property_map'),
      ReviewActions = require('../actions/review_actions'),
      ReviewForm = require('./review_form'),
      ReviewStore = require('../stores/review_store'),
      PropertyActions = require('../actions/property_actions');

const ShowProperty = React.createClass({
  getInitialState () {
    const propId = this.props.params.propertyId;
    const property = PropertyStore.find(propId);

    return {
      property: property,
      reviews: {},
      propRatingSum: 0,
      lordRatingSum: 0,
      numRatings: 0
     };
  },

  componentDidMount() {
    this.reviewListener = ReviewStore.addListener(this._onReviewChange);
    this.propertyListener = PropertyStore.addListener(this._onPropertyChange);
    PropertyActions.fetchProperty(this.props.params.propertyId);
    ReviewActions.fetchPropertyReviews(this.props.params.propertyId);
  },

  drawPropertyRating () {
    const sum = parseInt(this.state.propRatingSum);
    const total = parseInt(this.numRatings);
    const average = Math.round(((sum / total) * 10) / 10);
    return (average);
  },

  drawLandlordRating () {
    const sum = parseInt(this.state.lordRatingSum);
    const total = parseInt(this.numRatings);
    const average = Math.round(((sum / total) * 10) / 10);
    return (average);
  },

  _onPropertyChange () {
    const propId = this.props.params.propertyId;
    this.setState({property: PropertyStore.find(propId)});
  },

  _onReviewChange () {
    this.setState({reviews: ReviewStore.all()});
  },

  showReviews () {
    // debugger
    const reviewObject = this.state.reviews;
    const reviewsArray = Object.keys(reviewObject).map((revId) => {
      const review = reviewObject[revId];
      this.state.numRatings ++;
      this.state.propRatingSum += review.property_rating;
      this.state.lordRatingSum += review.landlord_rating;
      return (
        <li key={revId} className="review-wrapper">
          <h3 className="personal-rating">Property rating: { review.property_rating }</h3>
          <h3 className="personal-rating">Landlord rating: { review.landlord_rating }</h3>
          <h1 className="review-title">{ review.title }</h1>
          <p className="review-body">{ review.body }</p>
        </li>
      );
    });
    return reviewsArray;
  },

  render () {
    let address, city, zipcode, lat, lng, reviews, propRating, lordRating, map;
    const property = this.state.property;

    if (property.address) {
      address = property.address;
      city = property.city;
      zipcode = property.zipcode;
      lat = property.lat;
      lng = property.lng;
      reviews = this.showReviews();
      propRating = this.drawPropertyRating();
      lordRating = this.drawLandlordRating();
      map = <SinglePropertyMap
        className="single-map"
        mapCenter={{lat: lat, lng: lng}}
        property={property}
      />;
    }


    return (
      <div className="show-property-wrapper">
        <h1 className="address-details street-address">{address}</h1>
        <h4 className="address-details">{city}</h4>
        <h4 className="address-details">{zipcode}</h4>
        <h2 className="stars">Property rating: {propRating}</h2>
        <h2 className="stars">Landlord rating: {lordRating}</h2>
        { map }
      { reviews }
      <ReviewForm
        className="review-form-component"
        propertyId={this.props.params.propertyId}/>
      </div>
    );
  }
});

module.exports = ShowProperty;
