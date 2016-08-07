const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      PropertyMap = require('./property_map'),
      PropertyIndex = require('./property_index');

const SearchResults = React.createClass ({
  getInitialState() {
    return { properties: PropertyStore.all() };
  },

  render () {
    return (
      <div>
        <PropertyMap
          properties={this.state.properties}
          mapCenter={this.props.mapCenter}/>
        <PropertyIndex />
      </div>
    );
  }
});

module.exports = SearchResults;
