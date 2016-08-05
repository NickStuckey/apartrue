const React = require('react'),
      ReactDOM = require('react-dom'),
      PropertyActions = require('../actions/property_actions'),
      PropertyStore = require('../stores/property_store');

const mapOptions = {
  center: {lat: 40.771117, lng: -73.957472},
  zoom: 13
};

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
      PropertyActions.fetchAllProperties(bounds);
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      that._handleClick(coords);
    });
  },

  componentDidMount () {
    this.map = new google.maps.Map(this.mapContainer, mapOptions);
    PropertyStore.addListener(this._onChange);
    this.addMapListeners();
    this.markers = [];

  },

  createMarker (property) {
    const latLng = new google.maps.LatLng(property.lat, property.lng);
    const marker = new google.maps.Marker({
      postition: latLng,
      map: this.map,
      propertyId: property.id,
      visible: true
    });
    marker.addListener('click', () => {
      hashHistory.push(`properties/${property.id}`);
    });
    marker.setMap(this.map);
    this.markers.push(marker);
  },

  _handleClick(coords) {
    console.log('this will be used to add property');
  },

  markersToRemove () {
    return [];              // NOTE update with search filters
  },

  _onChange () {
    this.propertiesToAdd().forEach(this.createMarker);
    this.markersToRemove().forEach(this.removeMarker);
    // const latLng = new google.maps.LatLng(40.771117, -73.957472);
    // debugger
    // const marker = new google.maps.Marker({
      // postition: latLng,
      // map: this.map,
    // });
    // marker.setMap(this.map);
    // debugger
  },

  propertiesToAdd () {
    const currentPropertyIds = this.markers.map((marker) => marker.propertyId);
    const newProperties = PropertyStore.all();
    // debugger
    const newPropertyIds = Object.keys(newProperties);

    let properties = [];
    newPropertyIds.forEach((propId) => {
      if (!currentPropertyIds.includes(propId)) {
        properties.push(newProperties[propId]);
      }
    });
    return properties;
  },

  removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  },

  render () {
    return (
      <div className="map" ref={(map) => this.mapContainer = map}>
        nothing here
      </div>
    );
  }
});

module.exports = PropertyMap;
