const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      FilterStore = require('../stores/filter_store'),
      SearchFeilds = require('./search_feilds'),
      PropertyActions = require('../actions/property_actions'),
      SessionStore = require('../stores/session_store');

const SearchForm = React.createClass({
  getInitialState () {
    return ({
      // properties: PropertyStore.all(),
      // filterParams: FilterStore.filters(),
      // address: "",
      // places: []
    });
  },

  componentDidMount () {
    // this.searchBox = new google.maps.places.SearchBox(this.searchBoxInput);
    this.propertyListener = PropertyStore.addListener(this._onPropertyChange);
    this.filterListener = FilterStore.addListener(this._onFilterChange);
    this.boxListener = this.searchBox.addListener(
      'places_changed',
      this.places_changed
    );
    PropertyActions.fetchAllProperties();
  },

  componentWillUnmount() {
    this.propertyListener.remove();
    this.filterListener.remove();
    this.boxListener.remove();
  },

  // handleSubmit() {
  //   const address = this.state.address;
  //   if (address) {
  //     console.log('this seems to work');
  //     // push to the property store and render results
  //   }
  // },

  placesChanged () {
    const that = this;
    const places = searchBox.getPlaces();
    that.setState({places: places});
    if (places.length === 0) { return; }
  },

  _onFilterChange () {
    const newFilters = FilterStore.filters();
    this.setState({filterParams: newFilters});
    PropertyActions.fetchAllProperties(newFilters);
  },

  _onPropertyChange () {
    const properties = PropertyStore.all();
    setState({properties: properties});
  },

  // selectLocation () {
  //   console.log();
  // },

  // updateAddress (e) {
  //   this.setState({address: e.target.value});
  // },

  render () {
    // debugger
    return (
      <div className="search-form-wrapper">
        <h2>SOME STUFF</h2>
        <AddressFinder />
        <SearchFeilds
          properties={this.state.properties}
          filterParams={this.state.filterParams}
        />
    </div>
    );
  }
});
// <form onSubmit={this.handleSubmit}>
// <input
//   type="text"
//   className="fuzzy-finder"
//   value={this.state.address}
//   onChange={this.updateAddress}
//   ref={(input) => this.searchBoxInput = input}
//   >
// </input>
// <input type="submit" value="find" />
// </form>

module.exports = SearchForm;
