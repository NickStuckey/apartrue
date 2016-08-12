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
    const id = parseInt(i) + 1;
    hashHistory.push(`/properties/${id}`);
  },

  render () {
    let propertiesArray;
    const propertiesObject = this.state.properties;

    if (propertiesObject) {

      propertiesArray = Object.keys(propertiesObject).map((propKey) => {
        const prop = propertiesObject[propKey];
        return (
          <li key={propKey} className="property-list-item">
            <a onClick={()=>{this.showPage(propKey);}}>
              <div className="transparent-list-item-background"></div>
              <div className="list-item-content ">
                <img src={prop.image_url} className="thumbnail"></img>
                <h2 className="property-list-item-address ">{prop.address}</h2>
                <ul className="property-details">
                  <li className="property-detail">{prop.city}</li>
                  <li className="property-detail">rent: ${prop.price}</li>
                  <li className="property-detail">bedrooms: {prop.num_bedrooms}</li>
                </ul>
                <div className="list-item-star-wrapper">
                  <div className="star-wrapper">
                    <label className="star-labels">average property rating</label>
                    <div className="property-list-item-stars">{this.drawPropertyStars(prop)}</div>
                  </div>
                  <div className="star-wrapper">
                    <label className="star-labels">average landlord rating</label>
                    <div className="property-list-item-stars">{this.drawLandlordStars(prop)}</div>
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
