const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      PropertyActions = require('../actions/property_actions');

const ShowProperty = React.createClass({
  getInitialState () {
    debugger
    return  ({
      property: PropertyActions.fetchProperty(parseInt(this.props.params.propertyId))
    });
  },

  render () {
    let property = this.state.property;
    debugger
    let propertyStats = Object.keys(property).map((stat) => {
      return <li className="property-stat">{property[stat]}</li>;
    });
    return (
      <div>
        <h1>{property.address}</h1>
        <ul className="property-info">
          { propertyStats }
        </ul>
      </div>
    );
  }
});

module.exports = ShowProperty;
