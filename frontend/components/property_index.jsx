const React = require('react'),
      ReactDOM = require('react-dom'),
      PropertyActions = require('../actions/property_actions'),
      PropertyStore = require('../stores/property_store');


const PropertyIndex = React.createClass ({
  getInitialState () {
    return ({properties: PropertyStore.all()});
  },

  componentDidMount () {
    this.propertyListener = PropertyStore.addListener(this._onChange);
  },

  _onChange () {
    console.log("index: ");
    console.log(PropertyStore.all());
    this.setState({properties: PropertyStore.all()});
  },

  render () {
    let propertiesArray, propertiesObject;
    if (this.state.properties) {
      propertiesObject = this.state.properties;
      propertiesArray = Object.keys(propertiesObject).map((propKey) => {
        return (
          <li key={propKey} className="property-list-item">
            <ul>
              <li className="property-list-item-attribute">{propertiesObject[propKey].address}</li>
              <li className="property-list-item-attribute">{propertiesObject[propKey].price}</li>
              <li className="property-list-item-attribute">{propertiesObject[propKey].num_bedrooms}</li>
              <li className="property-list-item-attribute">{propertiesObject[propKey].available}</li>
              <li className="property-list-item-attribute">{propertiesObject[propKey].city}</li>
            </ul>
          </li>
        );
      });
    }

    return (
      <div>
        <ul className="propeties-list">
          { propertiesArray }
        </ul>
      </div>
    );
  }
});

module.exports = PropertyIndex;
