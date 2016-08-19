const React = require('react'),
      FilterActions = require('../actions/filter_actions'),
      PropertyMap = require('./property_map'),
      PropertyActions = require('../actions/property_actions');

const fieldErrorMsg = "required field";
let bedroomsError, priceLimitError, neighborhoodIdError;
let mapCenter;
let propertyMap;

const SearchFields = React.createClass({
  getInitialState() {
    return ({
      bedrooms: 0, priceLimit: 0, neighborhoodId: 0
    });
  },

  handleSubmit (e) {
    e.preventDefault();

    const bedrooms = this.state.bedrooms,
          priceLimit = this.state.priceLimit,
          neighborhoodId = this.state.neighborhoodId;

    if (!!bedrooms && !!priceLimit && !!neighborhoodId) {
      FilterActions.updateFilters(this.state);
    } else {
      bedroomsError = bedrooms ? "" : fieldErrorMsg;
      priceLimitError = priceLimit ? "" : fieldErrorMsg;
      neighborhoodIdError = neighborhoodIdError ? "" : fieldErrorMsg;
    }
  },

  updateSize (e) {
    this.setState({bedrooms: e.target.value});
  },

  updatePrice (e) {
    this.setState({priceLimit: e.target.value});
  },

  updateMapCenter (id) {
    let center;
    switch (parseInt(id)) {
      case 1: // Manhattan
        center = {lat: 40.75662, lng: -73.985367};
        break;
      case 2: // Brooklyn
        center = {lat: 40.676993, lng: -73.940048};
        break;
      case 3: // Queens
        center = {lat: 40.728007, lng: -73.796539};
        break;
      case 4: // Bronx
        center = {lat: 40.87043, lng: -73.881683};
        break;
      case 5: // Staten Island
        center = {lat: 40.584235, lng: -74.150848};
        break;
      }
    this.props.setMap(center);
  },

  updateNeighborhoodId (e) {
    const id = e.target.value;
    this.setState({neighborhoodId: id});
    this.updateMapCenter(id);
  },

  render () {
    return (
      <form className={"search-filter-inputs"} onSubmit={ this.handleSubmit }>
        <p>{ bedroomsError } </p>
        <select
          className="search-field-list input-field"
          onChange={this.updateSize}>
          <option className="default" value="" hidden>bedrooms</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="0">0</option>
        </select>

        <p>{ priceLimitError } </p>
        <select
          className="search-field-list input-field"
          onChange={this.updatePrice}>
          <option className="default" value="" hidden>Price Limit</option>
          <option value="1500">1500</option>
          <option value="2500">2500</option>
          <option value="3500">3500</option>
          <option value="4500">4500</option>
          <option value="5500">5500</option>
          <option value="99999999999">none</option>
        </select>

        <p>{ neighborhoodIdError }</p>
        <select
          className="search-field-list input-field"
          onChange={this.updateNeighborhoodId}>
          <option className="default" value="" hidden>Neighborhood</option>
          <option value="1">Manhattan</option>
          <option value="2">Brooklyn</option>
          <option value="3">Queens</option>
          <option value="4">Bronx</option>
          <option value="5">Staten Island</option>
        </select>

        <input type="submit" className="search-button button" value="go!"/>
      </form>
    );
  }
});


module.exports = SearchFields;