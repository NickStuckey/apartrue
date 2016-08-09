const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      SinglePropertyMap = require('./single_property_map'),
      ReviewActions = require('../actions/review_actions'),
      ReviewStore = require('../stores/review_store'),
      PropertyActions = require('../actions/property_actions');

const ShowProperty = React.createClass({
  getInitialState () {
    const propId = this.props.params.propertyId;
    const property = PropertyStore.find(propId);
    return {
      property: property,
      reviews: {}
     };
  },

  componentDidMount() {
    this.reviewListener = ReviewStore.addListener(this._onReviewChange);
    ReviewActions.fetchPropertyReviews(this.state.property.id);
    PropertyActions.fetchProperty(this.state.property.id); // NOTE might not need this, not useing it so far
  },

  drawPropertyRating () {
    return <p className="stars">Property rating goes here</p>;
  },

  drawLandlordRating () {
    return <p className="stars">Landlord rating goes here</p>;
  },

  _onReviewChange() {
    this.setState({reviews: ReviewStore.all()});
  },

  render () {
    const reviewObject = this.state.reviews;
    const reviewsArray = Object.keys(reviewObject).map((revId) => {
      const review = reviewObject[revId];
      return (
        <div className="review-wrapper">
          { this.drawPropertyRating }
          { this.drawLandlordRating }
          <h1 className="review-title">{ review.title }</h1>
          <p className="review-body">{ review.body }</p>
        </div>
      );
    });

    let property = this.state.property;
    let propertyStats = Object.keys(property).map((stat, i) => {
      return <li key={i} className="property-stat">{property[stat]}</li>;
    });

    return (
      <div className="show-property-wrapper">
        <h1>{property.address}</h1>
        <ul className="property-info">
          { propertyStats }
        </ul>
        <SinglePropertyMap
          mapCenter={{lat: property.lat, lng: property.lng}}
          property={property}
        />
      { reviewsArray }
      </div>
    );
  }
});

module.exports = ShowProperty;
