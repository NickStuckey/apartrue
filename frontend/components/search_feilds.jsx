const React = require('react'),
      FilterActions = require('../actions/filter_actions'),
      PropertyStore = require('../stores/property_store'),
      PropertyMap = require('./property_map'),
      PropertyActions = require('../actions/property_actions');

const fieldErrorMsg = "required field";
let bedroomsError, priceLimitError, neighborhoodIdError;
let mapCenter;
let propertyMap;

const SearchFeilds = React.createClass({
  getInitialState() {
    return ({
      mapCenter: {lat: 40.75662, lng: -73.985367},
      filters: {bedrooms: 0, priceLimit: 0, neighborhoodId: 0}
    });
  },

  componentDidMount () {
    this.propertyListener = PropertyStore.addListener(this._onPropertyChange);
  },

  componentWillUnmount () {
    this.propertyListener.remove();
  },

  handleSubmit (e) {
    e.preventDefault();

    const bedrooms = this.state.filters.bedrooms,
          priceLimit = this.state.filters.priceLimit,
          neighborhoodId = this.state.filters.neighborhoodId;
    if (bedrooms && priceLimit && neighborhoodId) {
      FilterActions.updateFilters(this.state.filters);
    } else {
      bedroomsError = bedrooms ? "" : fieldErrorMsg;
      priceLimitError = price ? "" : fieldErrorMsg;
      neighborhoodIdError = neighborhoodIdError ? "" : fieldErrorMsg;
    }
  },

  updateSize (e) {
    this.setState({bedrooms: e.target.value});
  },

  updatePrice (e) {
    this.setState({priceLimit: e.target.value});
  },

  updateNeighborhoodId (e) {
    const id = e.target.value;

    switch (id) {
      case 1: // Manhattan
      this.setState({mapCenter: {lat: 40.75662, lng: -73.985367}});
        break;
      case 2: // Brooklyn
      this.setState({mapCenter: {lat: 40.676993, lng: -73.940048}});
        break;
      case 3: // Queens
      this.setState({mapCenter: {lat: 40.728007, lng: -73.796539}});
        break;
      case 4: // Bronx
      this.setState({mapCenter: {lat: 40.87043, lng: -73.881683}});
        break;
      case 5: // Staten Island
      this.setState({mapCenter: {lat: 40.584235, lng: -74.150848}});
        break;
    }
  },

  render () {
    // temp just to get format to pass, needs to be reset to either navbar or SearchForm
    let format; // will contain container size info for dropdowns
    return (
      <form className={ format } onSubmit={handleSubmit}>
        <p>{ bedroomsError } </p>
        <select
          className="search-feild-list"
          onChange={this.updateSize}>Bedrooms
          <option className="search-feild-list-item" value="5">5</option>
          <option className="search-feild-list-item" value="4">4</option>
          <option className="search-feild-list-item" value="3">3</option>
          <option className="search-feild-list-item" value="2">2</option>
          <option className="search-feild-list-item" value="1">1</option>
          <option className="search-feild-list-item" value="0">0</option>
        </select>

        <p>{ priceError } </p>
        <select
          className="search-feild-list"
          onChange={this.updatePrice}>Price Limit
          <option className="search-feild-list-item" value="1500">1500</option>
          <option className="search-feild-list-item" value="2500">2500</option>
          <option className="search-feild-list-item" value="3500">3500</option>
          <option className="search-feild-list-item" value="4500">4500</option>
          <option className="search-feild-list-item" value="5500">5500</option>
          <option className="search-feild-list-item" value="99999999999">none</option>
        </select>

        <p>{ neighborhoodError } </p>
        <select
          className="search-feild-list"
          onChange={this.updateNeighborhoodId}>Neighborhood
          <option className="search-feild-list-item" value="1">Manhattan</option>
          <option className="search-feild-list-item" value="2">Brooklyn</option>
          <option className="search-feild-list-item" value="3">Queens</option>
          <option className="search-feild-list-item" value="4">Bronx</option>
          <option className="search-feild-list-item" value="5">Staten Island</option>
        </select>

        <input type="submit" value="go!"/>
      </form>
    );
  }
});


module.exports = SearchFeilds;
