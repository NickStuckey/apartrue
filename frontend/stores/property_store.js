const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const PropertyConstants = require('../constants/property_constants');

const PropertyStore = new Store(AppDispatcher);

let _properties = {};

const resetProperties = function (properties) {
  _properties = properties;
  PropertyStore.__emitChange();
};

// PropertyStore.queryProperty = function (property) {
//   // const addressSubStrings = property.split(', ');
//
//   properties = PropertyStore.all();
//   const addressess = Object.keys(properties).map((propKey) => {
//     return properties[propkey].address;
//   });
//
//
// };

const addProperty = function (property) {
  _properties[property.id] = property;
  PropertyStore.__emitChange();
};

PropertyStore.all = () => {
  return Object.assign({}, _properties);
};

PropertyStore.find = function(id){
  return Object.assign({}, _properties[id]);
};

PropertyStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case PropertyConstants.PROPERTIES_RECEIVED:
      resetProperties(payload.properties);
      break;
    case PropertyConstants.PROPERTY_RECEIVED:
      addProperty(payload.property);
      break;
    case PropertyConstants.PROPERTY_REMOVED:
      removeProperty(payload.property);
      break;
  }
};

module.exports = PropertyStore;
