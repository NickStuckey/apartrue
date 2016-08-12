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

      FilterActions.updateBounds(bounds);
      // const testFilters = FilterStore.filters();
      PropertyActions.fetchAllPropertiesWithParams(FilterStore.filters());
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      that._handleClick(coords);
    });
  },

  componentDidMount () {
    const mapOptions = {center: this.props.mapCenter, zoom: 12};
    this.propertyListener = PropertyStore.addListener(this._onChange);
    this.map = new google.maps.Map(this.mapContainer, mapOptions);
    this.addMapListeners();
    this.markers = [];
  },

  componentWillUnmount () {
    this.propertyListener.remove();
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
    marker.addListener('click', () => {
      hashHistory.push(`properties/${property.id}`);
    });
    this.markers.push(marker);
  },

  _handleClick(coords) {
    console.log('this will be used to add property');
  },

  markersToRemove () {
    return [];              // NOTE update with search filters NOTE
  },

  _onChange () {
    this.propertiesToAdd().forEach(this.createMarker);
    this.markersToRemove().forEach(this.removeMarker);
  },

  propertiesToAdd () {
    const currentPropertyIds = this.markers.map((marker) => marker.propertyId);
    const newProperties = PropertyStore.all();
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
      <div className="map" ref={(map) => this.mapContainer = map}></div>
    );
  }
});

module.exports = PropertyMap;
