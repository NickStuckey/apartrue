const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      PropertyMap = require('./property_map'),
      PropertyIndex = require('./property_index');

const SearchResults = React.createClass ({
  render () {
    return (
      <div>
        <PropertyMap
          mapCenter={this.props.mapCenter}/>
        <PropertyIndex />
      </div>
    );
  }
});

module.exports = SearchResults;
