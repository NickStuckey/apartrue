const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      PropertyActions = require('../actions/property_actions'),
      PropertyMap = require('./property_map'),
      PropertyIndex = require('./property_index');

const Search = React.createClass ({
  getInitialState() {
    return { properties: PropertyStore.all() };
  },

  render () {
    return (
      <div>
        <PropertyMap properties={this.state.properties} />
        <PropertyIndex />
      </div>
    );
  }
});

module.exports = Search;
