const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      hashHistory = require('react-router').hashHistory,
      FilterStore = require('../stores/filter_store'),
      SearchFeilds = require('./search_feilds'),
      PropertyActions = require('../actions/property_actions'),
      SessionStore = require('../stores/session_store');

let results;

const SearchForm = React.createClass({
  getInitialState () {
    return ({mapCenter: {lat: 40.75662, lng: -73.985367}});
  },

  componentDidMount () {
    this.filterListener = FilterStore.addListener(this._onFilterChange);
    PropertyActions.fetchAllProperties();
  },

  componentWillUnmount () {
    this.filterListener.remove();
    this.boxListener.remove();
  },

  currentPath () {
    return (hashHistory[-1] === "/") ? "welcome" : "navbar"; // NOTE figure out how to get current path
  },

  _onFilterChange () {
    const newFilters = FilterStore.filters();
    this.setState({filterParams: newFilters});
    PropertyActions.fetchAllProperties(newFilters);
    searchResults = <PropertyMap mapCenter={ setMap } format={ currentPath }/>;
  },

  setMap (newCenter) {
    this.setState({mapCenter: newCenter});
  },

  render () {

    return (
      <div className="search-form-wrapper">
        <h2>SOME STUFF</h2>
        <AddressFinder />
        <SearchFeilds update={showResults} />
        { results }
    </div>
    );
  }
});

module.exports = SearchForm;
