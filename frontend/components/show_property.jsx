const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      SinglePropertyMap = require('./single_property_map'),
      SingleReview = require('./single_review'),
      ReviewActions = require('../actions/review_actions'),
      ReviewForm = require('./review_form'),
      ReviewStore = require('../stores/review_store'),
      PropertyActions = require('../actions/property_actions');

const ShowProperty = React.createClass({
  getInitialState () {
    return { property: {}, reviews: {}, landlordStats: {} };
  },

  componentDidMount() {
    this.reviewListener = ReviewStore.addListener(this._onReviewChange);
    this.propertyListener = PropertyStore.addListener(this._onPropertyChange);
    PropertyActions.fetchProperty(this.props.params.propertyId);
    ReviewActions.fetchPropertyReviews(this.props.params.propertyId);
  },

  drawPropertyRating () {
    const rating = this.state.property.avg_property_rating;
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("★");
    }

    return (<p className="avg-stars">{stars.join('')}</p>);
  },

  drawLandlordRating () {
    const rating = this.state.property.avg_property_rating;
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("★");
    }

    return (<p className="avg-stars">{stars.join('')}</p>);
  },

  _onPropertyChange () {
    const propId = this.props.params.propertyId;
    this.setState({property: PropertyStore.find(propId)});
  },

  _onReviewChange () {
    const propId = this.props.params.propertyId;
    this.setState({reviews: ReviewStore.all()});
    this.setStat({property: PropetyActions.fetchProperty(propId)});
  },

  showReviews () {
    const reviewObject = this.state.reviews;
    const reviewsArray = Object.keys(reviewObject).map((revId) => {
      const review = reviewObject[revId];
      return <SingleReview key={revId} review={review}/>;
    });

    return reviewsArray;
  },

  render () {
    let address, city, zipcode, lat, lng, reviews, propRating, lordRating, map;
    const property = this.state.property;

    if (property.address) {
      reviews = this.showReviews();
      address = property.address;
      city = property.city;
      zipcode = property.zipcode;
      lat = property.lat;
      lng = property.lng;
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
        <div className="header-wrapper">
          <h1 className="title-address">{address}</h1>
            <h2>Property</h2>
              {propRating}
            <h2>Landlord</h2>
              {lordRating}
          <div className="map-box group">
            { map }
            <div className="map-box-text">
              <ul>
                <li className="address-detail">{address}</li>
                <li className="address-detail">{city}</li>
                <li className="address-detail">{zipcode}</li>
              </ul>

            </div>
          </div>
          <img className="property-pic" src={property.image_url}/>
          { reviews }
          <ReviewForm
            className="review-form-component"
            propertyId={this.props.params.propertyId}/>
        </div>
      </div>
    );
  }
});

module.exports = ShowProperty;
