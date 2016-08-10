const React = require('react'),
      AddressFinder = require('./address_finder'),
      hashHistory = require('react-router').hashHistory,
      FilterStore = require('../stores/filter_store'),
      NavBar = require('./nav_bar'),
      SearchFields = require('./search_feilds'),
      SearchResults = require('./search_results'),
      SessionStore = require('../stores/session_store');

let results;

const SearchForm = React.createClass({
  getInitialState () {
    return ({mapCenter: {lat: 40.75662, lng: -73.985367}});
  },

  componentDidMount () {
    this.filterListener = FilterStore.addListener(this._onFilterChange);
  },

  componentWillUnmount () {
    this.filterListener.remove();
  },

  _onFilterChange () {
    results = <SearchResults mapCenter={ this.state.mapCenter } format={ this.currentPath }/>; // format is for css styling of the result element
    this.forceUpdate();
  },

  setMap (newCenter) {
    this.setState({mapCenter: newCenter});
  },

  render () {
    return (
      <div className="page-wrapper group">
        <h2 className="search-header">You''re just a few steps from home.</h2>
        <div className="backing-bar"></div>
        <div className="search-form-background"></div>
        <div className="search-form-wrapper">
          <h1>What are you looking for?</h1>
          <SearchFields setMap={this.setMap} />
          <h1>Or, search by address</h1>
          <AddressFinder className="address-finder"/>
          { results }
        </div>
      </div>
    );
  }
});

module.exports = SearchForm;
