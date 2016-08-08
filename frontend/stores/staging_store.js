const Store = require('flux/utils').Store,
      PropertyConstants = require('../constants/property_constants'),
      PropertyStore = require('../stores/property_store'),
      AppDispatcher = require('../dispatcher/dispatcher');

const StagingStore = new Store(AppDispatcher);

let _stagedProperty = null;

const stage = function (property) {
  _stagedProperty = property;
};

StagingStore.getStagedProperty = function () {
  const property = _stagedProperty;
  _stagedProperty = null;
  return Object.assign(property);
};

StagingStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PropertyConstants.STAGE_PROPERTY:
      stage(payload.property);
      break;
    default:
  }
};

module.exports = StagingStore;
