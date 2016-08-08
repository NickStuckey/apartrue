const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      PropertyActions = require('../actions/property_actions'),
      SessionStore = require('../stores/session_store'),
      // StagingStore = require('../stores/staging_store'),
      hashHistory = require('react-router').hashHistory;

const geocoder = new google.maps.Geocoder();

const fieldErrorMsg = 'field cannot be blank';
let addressError, zipcodeError, cityError;

let isOwner = false;

const PropertyFrom = React.createClass ({
  getInitialState() {
    // const property = StagingStore.getStagedProperty();
    let address, city, numBedRooms;

    // if (property) {
    //   address = property;
    //   city = null;
    //   zipcode = null;
    // }

    return ({
      address: "",
      city: null,
      zipcode: "",
      price: null,
      numBedRooms: "", // change to dropdown
      available: false,
      ownerId: null,
      lat: null,
      lng: null
    });
  },

  componentDidMount () {
    this.propertyListener = PropertyStore.addListener(this._onChange);
  },

  codeAddress() {
    const that = this;
    const address = `${this.state.address}, ${this.state.city}, ${this.state.zipcode}`;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        that.sendToAPI(results);
      } else {
        that._placeError(status);
      }
    });
  },

  handleSubmit (e) {
    e.preventDefault();

    const address = this.state.address,
          zipcode = this.state.zipcode,
          city = this.state.city;

    if (!(address, zipcode, city)) {
      addressError = address ? "" : fieldErrorMsg;
      zipcodeError =  zipcode ? "" : fieldErrorMsg;
      cityError =  city ? "" : fieldErrorMsg;
      this.forceUpdate();
      return;
    }

    this.codeAddress();
  },

  _onChange () {
    const newProperty = PropertyStore.all();
    hashHistory.push(`properties/${newProperty.id}`);
  },

  _placeError (status) {
    console.log(status);
  },

  sendToAPI (results) {
    const latLng = results[0].geometry.location;
    const ownerId = isOwner ? SessionStore.userId() : null;

    this.setState({
      lat: latLng.lat(),
      lng: latLng.lng(),
      ownerId: ownerId
    });
    PropertyActions.createProperty(this.state);
  },

  showErrors () {
    PropertyStore.errors();
  },

  updateAddress (e) {
    this.setState({address: e.target.value});
  },

  updateZipcode (e) {
    this.setState({zipcode: parseInt(e.target.value)});
  },

  updateCity (e) {
    this.setState({city: e.target.value});
  },

  updatePrice (e) {
    this.setState({price: parseInt(e.target.value)});
  },

  updateNumBedRooms (e) { // NOTE change to dropdown
    this.setState({numBed: parseInt(e.target.value)});
  },

  updateIsCurrentOwner () {
    isOwner = !isOwner;
  },

  updateIsAvailable () {
    this.setState({available: !this.props.available});
  },

  render () {
    return (
      <div className="property-form-component-wrapper">
        <form className="property-form" onSubmit={this.handleSubmit}>
          <div className="form-feild-error">{ addressError }</div>
          <label>Address
          <input
              type="text"
              className="property-form-input-field"
              onChange={this.updateAddress}
              value={this.props.address}
              />
          </label>
          <div className="form-feild-error">{ zipcodeError }</div>
          <label>Zipcode
            <input
              type="text"
              className="property-form-input-field"
              onChange={this.updateZipcode}
              value={this.props.zipcode}
              />
          </label>
          <div className="form-feild-error">{ cityError }</div>
          <label>City
            <input
              type="text"
              className="property-form-input-field"
              onChange={this.updateCity}
              value={this.props.city}
              />
          </label>
          <label>Price
            <input
              type="text"
              className="property-form-input-field"
              onChange={this.updatePrice}
              value={this.props.address}
              />
          </label>
          <label>Number of Bedrooms // NOTE change to dropdown
            <input
              type="text"
              className="property-form-input-field"
              onChange={this.updateNumBedRooms}
              value={this.props.numBedRooms}
              />
          </label>
          <label>owner?
            <input
              type="checkbox"
              className="property-form-input-field"
              onChange={this.updateIsCurrentOwner}
              />
          </label>
          <label>Available?
            <input
              type="checkbox"
              className="property-form-input-field"
              onChange={this.updateIsAvailable}
              />
          </label>
          <input type="submit" value="Add Location"/>
        </form>
      </div>
    );
  }
});

module.exports = PropertyFrom;
