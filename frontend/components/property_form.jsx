 const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      PropertyActions = require('../actions/property_actions'),
      SessionStore = require('../stores/session_store'),
      StagingStore = require('../stores/staging_store'),
      hashHistory = require('react-router').hashHistory;

const geocoder = new google.maps.Geocoder();

const fieldErrorMsg = 'field cannot be blank';
let addressError, zipcodeError, cityError;

let isOwner = false;

const PropertyFrom = React.createClass ({
  getInitialState() {
    // get property from stage store
    const property = StagingStore.getStagedProperty();
    let address, city, zipcode;

    // if it's not an empty object then set things
    if (!!property.address) {
      address = property.address;
      zipcode = property.zipcode;
      city = property.city;
    }

    return ({
      address: address,
      city: city,
      zipcode: zipcode,
      price: null,
      numBedrooms: "",
      available: false,
      ownerId: null,
      lat: null,
      lng: null,
      imageFile: null,
      imageUrl: null
    });
  },

  componentDidMount () {
    this.propertyListener = PropertyStore.addListener(this._onChange);
  },

  componentWillUnmount () {
    this.propertyListener.remove();
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
          city = this.state.city;

    if (!(address, city)) {
      addressError = address ? "" : fieldErrorMsg;
      cityError =  city ? "" : fieldErrorMsg;
      this.forceUpdate();
      return;
    }

    this.codeAddress();
  },

  _onChange () {
    const newProperty = PropertyStore.all(); // NOTE CHANGE TO LAST PROPETY
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

    const formData = new FormData();

    formData.append("property[address]", this.state.address);
    formData.append("property[zipcode]", this.state.zipcode);
    formData.append("property[price]", this.state.price);
    formData.append("property[num_bedrooms]", this.state.numBedrooms);
    formData.append("property[available]", this.state.available);
    formData.append("property[lat]", this.state.lat);
    formData.append("property[lng]", this.state.lng);
    formData.append("property[city]", this.state.city);
    formData.append("property[owner_id]", this.state.ownerId);
    formData.append("property[image]", this.state.imageFile);

    PropertyActions.createProperty(formData);

    // PropertyActions.createProperty(this.state);
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

  updateNumBedRooms (e) {
    this.setState({numBed: e.target.value});
  },

  updateIsCurrentOwner () {
    isOwner = !isOwner;
  },

  updateIsAvailable () {
    this.setState({available: !this.props.available});
  },

  updateFile (e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
   },

  render () {
    const address = [
      this.state.address,
      this.state.city,
      this.state.zipcode
    ].join(', ');

    return (
      <div className="property-form-component-wrapper">
        <h1>{address} is not in our database, please complete the form and submit it</h1>
        <form className="property-form" onSubmit={this.handleSubmit}>
          <div className="form-feild-error">{ addressError }</div>
          <label>Address
          <input
              type="text"
              className="property-form-input-field"
              onChange={this.updateAddress}
              value={this.state.address}
              />
          </label>
          <label>Zipcode
            <input
              type="text"
              className="property-form-input-field"
              onChange={this.updateZipcode}
              value={this.state.zipcode}
              />
          </label>
          <div className="form-feild-error">{ cityError }</div>
          <label>City
            <input
              type="text"
              className="property-form-input-field"
              onChange={this.updateCity}
              value={this.state.city}
              />
          </label>
          <label>Price
            <input
              type="text"
              className="property-form-input-field"
              onChange={this.updatePrice}
              value={this.state.price}
              />
          </label>

          <label>Number of Bedrooms
            <select
              className="dropdown bedrooms-field"
              onChange={this.updateNumBedRooms}
              value={ this.state.numBedrooms }>
              <option className="default" value="">bedrooms</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
              <option value="0">0</option>
            </select>
          </label>
          <label>owner?
            <input
              type="checkbox"
              className="property-form-check-box"
              onChange={this.updateIsCurrentOwner}
              />
          </label>
          <label>Available?
            <input
              type="checkbox"
              className="property-form-check-box"
              onChange={this.updateIsAvailable}
              />
          </label>
          <input type="file" onChange={this.updateFile} />
          <input type="submit" value="Add Location"/>
        </form>
      </div>
    );
  }
});

// <input
//   type="text"
//   className="property-form-input-field"
//   onChange={this.updateNumBedRooms}
//   value={this.state.numBedrooms}
//   />

module.exports = PropertyFrom;
