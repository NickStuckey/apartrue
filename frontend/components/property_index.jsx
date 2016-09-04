const React = require('react'),
      ReactDOM = require('react-dom'),
      PropertyActions = require('../actions/property_actions'),
      hashHistory = require('react-router').hashHistory,
      PropertyStore = require('../stores/property_store');


const PropertyIndex = React.createClass ({
  getInitialState () {
    return ({properties: PropertyStore.all()});
  },

  componentDidMount () {
    this.propertyListener = PropertyStore.addListener(this._onChange);
  },

  componentWillUnmount () {
    this.propertyListener.remove();
  },

  drawLandlordStars (property) {
    const rating = property.avg_landlord_rating;
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("★");
    }

    return (<p className="avg-stars">{stars.join('')}</p>);
  },

  drawPropertyStars (property) {
    const rating = property.avg_property_rating;
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("★");
    }

    return (<p className="avg-stars">{stars.join('')}</p>);
  },

  _onChange () {
    this.setState({properties: PropertyStore.all()});
  },

  showPage (i) {
    hashHistory.push(`/properties/${i}`);
  },

  render () {
    let propertiesArray;
    let properties = this.state.properties;

    if (properties) {
      propertiesArray = properties.map((property) => {
        return (
          <li key={property.id} className="property-list-item">
            <a onClick={()=>{this.showPage(property.id);}}>
              <div className="transparent-list-item-background"></div>
              <div className="list-item-content ">
                <img src={property.image_url} className="thumbnail"></img>
                <h2 className="property-list-item-address ">{property.address}</h2>
                <ul className="property-details">
                  <li className="property-detail">{property.city}</li>
                  <li className="property-detail">rent: ${property.price}</li>
                  <li className="property-detail">bedrooms: {property.num_bedrooms}</li>
                </ul>
                <div className="list-item-star-wrapper">
                  <div className="star-wrapper">
                    <label className="star-labels">average property rating</label>
                    <div className="property-list-item-stars">{this.drawPropertyStars(property)}</div>
                  </div>
                  <div className="star-wrapper">
                    <label className="star-labels">average landlord rating</label>
                    <div className="property-list-item-stars">{this.drawLandlordStars(property)}</div>
                  </div>
                </div>
              </div>
            </a>
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
