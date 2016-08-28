const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      PropertyMap = require('./property_map'),
      PropertyIndex = require('./property_index');

const SearchResults = React.createClass ({

  render () {
    return (
      <div className="search-results-wrapper">
        <PropertyMap
          mapCenter={this.props.mapCenter}/>
        <PropertyIndex className="property-result-list"/>
      </div>
    );
  }
});

module.exports = SearchResults;
