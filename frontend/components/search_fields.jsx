const React = require('react'),
      FilterActions = require('../actions/filter_actions'),
      PropertyMap = require('./property_map'),
      NeighborhoodActions = require('../actions/neighborhood_actions'),
      NeighborhoodStore = require('../stores/neighborhood_store'),
      PropertyActions = require('../actions/property_actions');

const fieldErrorMsg = "required field";
let mapCenter;
let propertyMap;
let neighborhoods = [];
let matchingNeighborhoods = [];
let textEntered = false;

const SearchFields = React.createClass({
  getInitialState() {
    return ({
      bedrooms: null, priceLimit: null, neighborhoodId: null, neighborhoodName: ""
    });
  },

  componentDidMount () {
    this.neighborhoodListener = NeighborhoodStore.addListener(this._onNeighborhoodChange);
    NeighborhoodActions.fetchAllNeighbrohoods();
  },

  handleSubmit (e) {
    e.preventDefault();
    const bedrooms = this.state.bedrooms,
          priceLimit = this.state.priceLimit,
          neighborhoodName = this.state.neighborhoodName;
    FilterActions.updateBounds(null);
    FilterActions.updateFilters(this.state);
  },

  _onNeighborhoodChange () {
    neighborhoods = NeighborhoodStore.all();
  },

  updateSize (e) {
    this.setState({bedrooms: e.target.value});
  },

  updatePrice (e) {
    this.setState({priceLimit: e.target.value});
  },

  updateNeighborhoodName (e) {
    const name = e.target.value;

    if (name){
      this.matchNeighborhood(name);
    } else {
      matchingNeighborhoods = [];
    }

    this.setState({neighborhoodName: name});
  },

  matchNeighborhood (query) {
    // debugger
    const re = new RegExp(query,'i');
    matchingNeighborhoods = neighborhoods.filter((hood) => {
      if (!!hood.name.match(re)) { return hood; }
    });
  },

  selectNeighborhood(id, name) {
    this.setState({neighborhoodId: id, neighborhoodName: name});
    matchingNeighborhoods = [];
  },

  render () {
    const neighborhoodList = matchingNeighborhoods.map(el => {
      return <li
        key={el.id}
        onClick={() => this.selectNeighborhood(el.id, el.name)}
        >
        {el.name}
      </li>;
    });

    return (
      <form className={"search-filter-inputs"} onSubmit={ this.handleSubmit }>
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

        <input
          type="text"
          className="input-field short"
          onChange={this.updateNeighborhoodName}
          value ={this.state.neighborhoodName}
          placeholder = "Search Neighborhoods">
        </input>

        <input type="submit" className="search-button button" value="go!"/>

        <ul className="prop-search-dropdown">
          { neighborhoodList }
        </ul>
      </form>
    );
  }
});


module.exports = SearchFields;
