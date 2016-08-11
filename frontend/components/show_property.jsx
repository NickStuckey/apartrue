const React = require('react'),
      Modal = require('react-modal'),
      PropertyStore = require('../stores/property_store'),
      hashHistory = require('react-router').hashHistory,
      SinglePropertyMap = require('./single_property_map'),
      SingleReview = require('./single_review'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions'),
      ReviewActions = require('../actions/review_actions'),
      ReviewForm = require('./review_form'),
      ReviewStore = require('../stores/review_store'),
      PropertyActions = require('../actions/property_actions');

const ShowProperty = React.createClass({
  getInitialState () {
    return ({
      property: {}, reviews: {}, modalOpen: false,
      modalLoginInfo: {
        username: "",
        password: ""
      }
    });
  },


  componentDidMount() {
    this.reviewListener = ReviewStore.addListener(this._onReviewChange);
    this.propertyListener = PropertyStore.addListener(this._onPropertyChange);
    PropertyActions.fetchProperty(this.props.params.propertyId);
    ReviewActions.fetchPropertyReviews(this.props.params.propertyId);
  },

  componentWillUnmount() {
    this.reviewListener.remove();
    this.propertyListener.remove();
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
    const rating = this.state.property.avg_landlord_rating;
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("★");
    }

    return (<p className="avg-stars">{stars.join('')}</p>);
  },

  handleSubmit (e) {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      password: this.state.password
    };

    if (this.props.location.pathname.toLowerCase() === "/login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.signUp(formData);
    }
  },

  modalStyle () {
      return {
        overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(128,128,128, 0.5)',
        zIndex         : 10
      },
      content : {
        position        : 'fixed',
        top             : '100px',
        left            : '500px',
        right           : '500px',
        bottom          : '100px',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex         : 11
      }
    };
  },

  _onPropertyChange () {
    const propId = this.props.params.propertyId;
    this.setState({property: PropertyStore.mostRecentlyAdded()});
  },

  _onReviewChange () {
    const propId = this.props.params.propertyId;
    this.setState({reviews: ReviewStore.all()});
    PropertyActions.fetchProperty(propId);
  },

  showReviews () {
    const reviewObject = this.state.reviews;
    const reviewsArray = Object.keys(reviewObject).map((revId) => {
      const review = reviewObject[revId];
      return <SingleReview key={revId} review={review}/>;
    });

    return reviewsArray;
  },

  showLogin () {
    hashHistory.push("/login");
  },

  closeModal (){
    this.setState({ modalOpen: false });
  },
  openModal (){
    this.setState({ modalOpen: true });
  },

  render () {
    let address, city, zipcode, lat, lng, reviews, propRating, lordRating, map, sessionOption;
    const property = this.state.property;

    if (SessionStore.isUserLoggedIn()) {
      sessionOption = <ReviewForm
        className="review-form-component"
        propertyId={this.props.params.propertyId}/>;
    } else {
      sessionOption = <button
        className="login-to-review button"
        onClick={this.openModal}>Login to leave a review</button>;
    }

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
          { sessionOption }
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.modalStyle()}>

          <h2>Im a modal!</h2>
          <form className="modal-login-form">
            <input
              type="text"
              value={this.state.modalLoginInfo.username}
              onChange={this.loginUser}
              />
          </form>

        </Modal>
      </div>
    );
  }
});

module.exports = ShowProperty;
