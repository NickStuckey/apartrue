const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const PropertyConstants = require('../constants/property_constants');
const ReviewConstants = require('../constants/review_constants');

const PropertyStore = new Store(AppDispatcher);

let _properties = [];

const setProperty = function (property) {
  _properties = [property];
  PropertyStore.__emitChange();
};

const resetProperties = function (properties) {
  _properties = Object.keys(properties).map((id) => { return properties[id]; });
  PropertyStore.__emitChange();
};

PropertyStore.findByStreetAddress = function (streetAddress) {
  return _properties.find((property) => {
    return property.address === streetAddress;
  });
};

PropertyStore.all = function () {
  return _properties.slice();
};

PropertyStore.mostRecentlyAdded = function () {
  return _properties[_properties.length -1];
};

PropertyStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case PropertyConstants.PROPERTIES_RECEIVED:
      resetProperties(payload.properties);
      break;
    case PropertyConstants.PROPERTY_RECEIVED:
      setProperty(payload.property);
      break;
    case PropertyConstants.PROPERTY_REMOVED:
      removeProperty(payload.property);
      break;
  }
};

module.exports = PropertyStore;
