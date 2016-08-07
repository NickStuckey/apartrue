const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      FilterStore = require('../stores/filter_store'),
      SearchFeilds = require('./search_feilds'),
      PropertyActions = require('../actions/property_actions'),
      SessionStore = require('../stores/session_store');

const AddressFinder = React.createClass({
  getInitialState () {
    return ({
      properties: PropertyStore.all(),
      // filterParams: FilterStore.filters(),
      address: "",
      places: []
    });
  },

  componentDidMount () {
    this.searchBox = new google.maps.places.SearchBox(this.searchBoxInput);
    this.propertyListener = PropertyStore.addListener(this._onPropertyChange);
    this.boxListener = this.searchBox.addListener(
      'places_changed', this.places_changed
    );
    PropertyActions.fetchAllProperties();
  },

  componentWillUnmount() {
    this.propertyListener.remove();
    this.boxListener.remove();
  },

  handleSubmit() { // fix incomming address NOTE
    const address = this.state.places[0];
    // make addres a processable entity here !!!NOTE
    const propertyId = AddressStore.getPropertyId(address);
    if (propertyId) {
      hashHistory.push(`properties/${propertyId}`);
    } else {
      PropertyActions.stageProperty(property);
      // save message to errors to be displayed on redirect
      hashHistory.push("properties/new"); 
    }
  },

  placesChanged () {
    const that = this;
    const places = searchBox.getPlaces();
    that.setState({places: places});
    if (places.length === 0) { return; }
  },

  _onPropertyChange () {
    const properties = PropertyStore.all();
    setState({properties: properties});
  },

  updateAddress (e) {
    this.setState({address: e.target.value});
  },

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>asdf</h1>
        <h1>asdf</h1>
        <h1>asdf</h1>
        <h1>asdf</h1>
        <input
          type="text"
          className="fuzzy-finder"
          value={this.state.address}
          onChange={this.updateAddress}
          ref={(input) => this.searchBoxInput = input}
          >
        </input>
        <input type="submit" value="find" />
      </form>
    );
  }

});

module.exports = AddressFinder;
