const React = require('react'),
      AddressFinder = require('./address_finder'),
      hashHistory = require('react-router').hashHistory,
      FilterStore = require('../stores/filter_store'),
      NavBar = require('./nav_bar'),
      MapUtil = require('../util/map_util'),
      PropertyActions = require('../actions/property_actions'),
      SearchFields = require('./search_fields'),
      SearchResults = require('./search_results'),
      SessionStore = require('../stores/session_store');

const SearchForm = React.createClass({
  getInitialState () {
    return ({results: null});
  },

  componentDidMount () {
    this.filterListener = FilterStore.addListener(this._onFilterChange);
  },

  componentWillUnmount () {
    this.filterListener.remove();
  },

  _onFilterChange () {
    let filters = FilterStore.filters();
    let mapCenter = MapUtil.updateMapCenter(filters.neighborhoodId);
    PropertyActions.fetchAllPropertiesWithParams(filters);

    const results = <SearchResults
      mapCenter={ mapCenter }
      className="search-map-wrapper"/>;
    this.setState({results: results});
  },

  render () {
    return (
      <div className="page-wrapper group">
        <h2 className="header welcome">you are just a few steps from home.</h2>
          <div className="backing-bar"></div>
          <div className="search-wrapper">
            <h1>Search by address</h1>
            <AddressFinder className="address-finder"/>
          </div>
          <div className="search-wrapper">
            <h1>Or, search by criteria</h1>
            <SearchFields setMap={this.setMap} />
          </div>
        { this.state.results }
      </div>
    );
  }
});

module.exports = SearchForm;
