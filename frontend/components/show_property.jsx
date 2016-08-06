const React = require('react'),
      PropertyStore = require('../stores/property_store'),
      PropertyActions = require('../actions/property_actions');

const ShowProperty = React.createClass({
  getInitialState () {
    const propId = parseInt(this.props.params.propertyId);
    const property = PropertyStore.find(propId) || {};
    return { property };
  },

  componentDidMount() {
    const propId = parseInt(this.props.params.propertyId);
    this.propertyListener = PropertyStore.addListener(this._onChange);
    PropertyActions.fetchProperty(propId);
  },

  componentWillUnmount() {
    this.propertyListener.remove();
  },

  _onChange () {
    const propId = parseInt(this.props.params.propertyId);
    const property = PropertyStore.find(propId);
    this.setState({ property });
  },

  render () {
    let property = this.state.property;
    let propertyStats = Object.keys(property).map((stat, i) => {
      return <li key={i} className="property-stat">{property[stat]}</li>;
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
