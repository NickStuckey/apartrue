const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      SinglePropertyMap = require('./single_property_map'),
      PropertyActions = require('../actions/property_actions');

const ShowProperty = React.createClass({
  getInitialState () {
    const propId = this.props.params.propertyId;
    const property = PropertyStore.find(propId);
    return {
      property: property
     };
  },

  componentDidMount() {
    PropertyActions.fetchProperty(this.state.property.id);
  },

  render () {
    let property = this.state.property;
    let propertyStats = Object.keys(property).map((stat, i) => {
      return <li key={i} className="property-stat">{property[stat]}</li>;
    });
    return (
      <div className="show-property-wrapper">
        <h1>{property.address}</h1>
        <ul className="property-info">
          { propertyStats }
        </ul>
        <SinglePropertyMap
          mapCenter={{lat: property.lat, lng: property.lng}}
          property={property}
        />
      </div>
    );
  }
});

module.exports = ShowProperty;
