const ApiUtil = require('../util/property_api_util'),
      AppDispatcher = require('../dispatcher/dispatcher'),
      PropertyStore = require('../stores/property_store'),
      PropertyApiUtil = require('../util/property_api_util'),
      PropertyConstants = require('../constants/property_constants');


const PropertyActions = {

  fetchAllProperties (bounds) {
    // let b = b ? bounds : {};
    ApiUtil.fetchAllProperties(bounds, this.receiveAllProperties);
  },

  // fetchProperty (address) {
  //   ApiUtil.fetchProperty(address, this.receiveProperty);
  // },
  //
  // removeProperty (id) {
  //   ApiUtil.removeProperty(id, this.removedProperty);
  // },

  receiveAllProperties (properties) {
    // debugger
    AppDispatcher.dispatch({
      actionType: PropertyConstants.PROPERTIES_RECEIVED,
      properties: properties
    });
  }

  // receiveProperty (property) {
  //   AppDispatcher.dispatch({
  //     actionType: PropertyConstants.PROPERTY_RECEIVED,
  //     property: property
  //   });
  // },
  //
  // removedProperty (property) {
  //   AppDispatcher.dispatch({
  //     actionType: PropertyConstants.PROPERTY_REMOVED,
  //     property: property
  //   });
  // }
};

module.exports = PropertyActions;
