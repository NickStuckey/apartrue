const Store = require('flux/utils').Store,
      PropertyConstants = require('../constants/property_constants'),
      PropertyStore = require('../stores/property_store'),
      AppDispatcher = require('../dispatcher/dispatcher');

const StagingStore = new Store(AppDispatcher);
// 
// let _stagedProperty = null;
//
// const stage = function (property) {
//   debugger
//   _stagedProperty = property;
//   debugger
// };
//
// StagingStore.getStagedProperty = function () {
//   const property = _stagedProperty;
//   _stagedProperty = null;
//   return Object.assign(property);
// };
//
// StagingStore.__onDispatch = function (payload) {
//   switch (payload.actionType) {
//     case PropertyConstants.STAGE_PROPERTY:
//     debugger
//       stage(payload.property);
//       break;
//   }
// };

module.exports = StagingStore;
