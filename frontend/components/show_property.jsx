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

let loginError;

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
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    PropertyActions.fetchProperty(this.props.params.propertyId);
    ReviewActions.fetchPropertyReviews(this.props.params.propertyId);
  },

  componentWillUnmount() {
    this.reviewListener.remove();
    this.propertyListener.remove();
    this.sessionListener.remove();
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

  _onSessionChange() {
    this.forceUpdate();
  },

  updateUsernameField (e) {
    this.setState({modalLoginInfo: {username: e.target.value}});
  },

  updatePasswordField (e) {
    this.setState({modalLoginInfo: {password: e.target.value}});
  },

  handleSubmit (e) {
    e.preventDefault();
    SessionActions.logIn(this.state.modalLoginInfo);
    this.closeModal();
  },

  modalStyle () {
      return {
        overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        margin          : 0,
        padding         : 0,
        backgroundColor : 'rgba(128,128,128, 0.5)',
        zIndex         : 1000
      },
      content : {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor : 'rgba(0,0,0, 0.75)',
        height: '500px',
        width: '450px',
        transform: 'translateY(25%)',
        position: 'relative',
        margin: 'auto',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex         : 1000
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

  closeModal (){
    this.setState({ modalOpen: false });
  },

  openModal (){
    this.setState({ modalOpen: true });
  },

  signInUser (loginInfo) {
    SessionActions.logIn(loginInfo);
  },

  signInGuest () {
    SessionActions.logIn({username: 'GuestUser', password: 'password'});
    this.closeModal();
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
      <div className="property-content-wrapper">
        <div className="header-wrapper">
          <h1 className="title-address">{address}</h1>
            <ul className="show-page-star-ratings">
              <li className="show-property-star-wrapper">
                <p className="star-label">Property</p>
                {propRating}
              </li>
              <li className="show-property-star-wrapper">
                <p className="star-label">Landlord</p>
                {lordRating}
              </li>
            </ul>
            <div className="mid-content-wrapper">
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
            </div>
            <div className="grey-end-to-end-bar"></div>
            <div className="bottom-content-wrapper" >
              { reviews }
              { sessionOption }
            </div>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.modalStyle()}>
          <p>{loginError}</p>
          <form className="modal-login-form">
            <h2>Log In</h2>
            <input
              type="text"
              value={this.state.modalLoginInfo.username}
              onChange={this.updateUsernameField}
              className="form-fields"
              />
            <input
              type="password"
              value={this.state.modalLoginInfo.password}
              onChange={this.updatePasswordField}
              className="form-fields"
              />
            <input
              type="submit"
              onClick={this.handleSubmit}
              className="sign-in-button"
              value="Sign In"
              />
          </form>
          <a className="centered-link" href="#/signup">sign up</a>

          <h2 className="guest-login-modal">Or continue as a guest</h2>
        <button
          onClick={this.signInGuest}
          id="modal-sign-in-button"
          >Welcome</button>

        </Modal>
      </div>
    );
  }
});

module.exports = ShowProperty;
