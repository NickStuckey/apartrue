const React = require('react'),
      ReactDOM = require('react-dom'),
      PropertyActions = require('../actions/property_actions'),
      PropertyStore = require('../stores/property_store'),
      FilterActions = require('../actions/filter_actions'),
      FilterStore = require('../stores/filter_store');

const PropertyMap = React.createClass ({
  addMapListeners() {
    const that = this;
    google.maps.event.addListener(this.map, 'idle', () => {
      const b = that.map.getBounds();
      const ne = b.getNorthEast();
      const sw = b.getSouthWest();
      const bounds = {
        northEast: {lat: ne.lat(), lng: ne.lng()},
        southWest: {lat: sw.lat(), lng: sw.lng()}
      };
    });
  },

  componentDidMount () {
    const mapOptions = {center: this.props.mapCenter, zoom: 16};
    this.map = new google.maps.Map(this.mapContainer, mapOptions);
    this.addMapListeners();
    this.createMarker(this.props.property);
  },

  createMarker (property) {
    let that = this;
    const latLng = new google.maps.LatLng(property.lat, property.lng);
    const marker = new google.maps.Marker({
      position: latLng,
      map: that.map,
      propertyId: property.id,
      visible: true
    });
  },

  _handleClick(coords) {
    console.log('this will be used to add property');
  },

  render () {
    return (
      <div className="single-prop-map group" ref={(map) => this.mapContainer = map}></div>
    );
  }
});

module.exports = PropertyMap;
