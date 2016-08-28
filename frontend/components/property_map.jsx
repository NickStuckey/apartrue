const React = require('react'),
      ReactDOM = require('react-dom'),
      PropertyActions = require('../actions/property_actions'),
      PropertyStore = require('../stores/property_store'),
      FilterActions = require('../actions/filter_actions'),
      MapUtil = require('../util/map_util'),
      FilterStore = require('../stores/filter_store');

const defaultCenter = {lat: 40.676993, lng: -73.940048};
let map;
const PropertyMap = React.createClass ({
  getInitialState () {
    let mapCenter = this.props.mapCenter || defaultCenter;

    return {
      mapCenter: mapCenter,
      markers: []
    };
  },

  addMapListeners() {
    const that = this;
    google.maps.event.addListener(map, 'idle', () => {
      const b = map.getBounds();
      const ne = b.getNorthEast();
      const sw = b.getSouthWest();
      const bounds = {
        northEast: {lat: ne.lat(), lng: ne.lng()},
        southWest: {lat: sw.lat(), lng: sw.lng()}
      };

      FilterActions.updateBounds(bounds);
      PropertyActions.fetchAllPropertiesWithParams(FilterStore.filters());
    });
  },

  componentDidMount () {
    const mapOptions = {center: this.state.mapCenter, zoom: 11};
    this.propertyListener = PropertyStore.addListener(this._onChange);
    this.propertiesToAdd().forEach(this.createMarker);
    // this.filterListener = FilterStore.addListener(this._changeFilters);
    map = new google.maps.Map(this.mapContainer, mapOptions);
    this.addMapListeners();
  },

  componentWillUnmount () {
    this.propertyListener.remove();
  },

  createMarker (property) {
    let that = this;
    const latLng = new google.maps.LatLng(property.lat, property.lng);
    const marker = new google.maps.Marker({
      position: latLng,
      map: map,
      propertyId: property.id,
      visible: true
    });
    marker.addListener('click', () => {
      hashHistory.push(`properties/${property.id}`);
    });
    this.state.markers.push(marker);
  },

  _onChange () {
    this.state.markers.forEach(this.removeMarker);
    this.setState({markers: []});
    this.propertiesToAdd().forEach(this.createMarker);
  },

  propertiesToAdd () {
    const currentPropertyIds = this.state.markers.map((marker) => marker.propertyId);
    const newProperties = PropertyStore.all();
    const newPropertyIds = Object.keys(newProperties);
    // get the new neighborhood from the a property in the hash
    const hoodId = newProperties[newPropertyIds[0]].neighborhoodId;
    // this.updateMapCenter(hoodId);

    let properties = [];
    newPropertyIds.forEach((propId) => {
      if (!currentPropertyIds.includes(propId)) {
        properties.push(newProperties[propId]);
      }
    });
    return properties;
  },

  removeMarker(marker) {
    let markers = this.state.markers;
    const idx = markers.indexOf( marker );
    markers[idx].setMap(null);
  },

  updateMapCenter (hoodId) {
    const mapCenter = MapUtil.updateMapCenter(hoodId);
    map.setCenter(mapCenter);
  },

  render () {
    return (
      <div className="map" ref={(map) => this.mapContainer = map}></div>
    );
  }
});

module.exports = PropertyMap;
