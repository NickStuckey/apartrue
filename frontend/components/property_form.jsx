const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      PropertyActions = require('../actions/property_actions');

const PropertyFrom = React.createClass ({
  getInitialState() {
    return ({
      address: "",
      zipcode: null,
      city: "",
      price: null,
      numBedRooms: "",
      available: "",
      isOwner: false,
      neighborhoodId: "",
      lat: null,
      lng: null
    });
  },

  componentDidMount () {
    this.propertyListener = PropertyStore.addListener(this._onChange);
  },

  _findLocation () {
    // google magic
    // set neighborhoodId
    // city
    // lat
    // lng 
  },

  handleSubmit () {
    _findLocation();
    PropertyActions.createProperty(this._onChange);
  },

  _onChange () {
    hashHistory.push("/properties/");  //NOTE how can i make this go to the property show page?
  },

  updateAddress (e) {
    this.setState({address: e.target.value});
  },

  updateZipcode () {
    this.setState({zipcode: parseInt(e.target.value)});
  },

  updateCity (e) {
    this.setState({city: e.target.value});
  },

  updatePrice (e) {
    this.setState({price: parseInt(e.target.value)});
  },

  updateNumBedRooms (e) {
    this.setState({numBed: parseInt(e.target.value)});
  },

  updateIsCurrentOwner () {
    this.setState({address: !this.props.address});
  },

  updateIsAvailable () {
    this.setState({available: !this.props.available});
  },

  render () {
    return (
      <div className="property-form-component-wrapper">
        <form className="property-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="property-form-input-field"
            onChange={this.updateAddress}
            value={this.props.address}
            />
          <input
            type="text"
            className="property-form-input-field"
            onChange={this.updateZipcode}
            value={this.props.zipcode}
            />
          <input
            type="text"
            className="property-form-input-field"
            onChange={this.updateCity}
            value={this.props.city}
            />
          <input
            type="text"
            className="property-form-input-field"
            onChange={this.updatePrice}
            value={this.props.address}
            />
          <input
            type="text"
            className="property-form-input-field"
            onChange={this.updateNumBedRooms}
            value={this.props.numBedRooms}
            />
          <input
            type="checkbox"
            className="property-form-input-field"
            onClick={this.updateIsCurrentOwner}
            />
          <input
            type="checkbox"
            className="property-form-input-field"
            onClick={this.updateIsAvailable}
            />
          <input type="submit" value="Add Location"/>
        </form>
      </div>
    );
  }
});

module.exports = PropertyFrom;
