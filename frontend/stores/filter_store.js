const Store = require('flux/utils').Store,
      FilterConstants = require('../constants/filter_constants'),
      AppDispatcher = require('../dispatcher/dispatcher');

let _filters = {};
const FilterStore = new Store(AppDispatcher);

const setBounds = function (newBounds) {
  _filters.bounds = newBounds;
  // FilterStore.__emitChange();
};

const setFilters = function (filters) {
  _filters = filters;
  FilterStore.__emitChange();
};

FilterStore.mapCenter = function () {
  return Object.assign({}, _filters.mapCenter);
};

FilterStore.filters = function (filters) {
  return Object.assign({}, _filters);
};

FilterStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FilterConstants.UPDATE_FILTERS:
      setFilters(payload.filters);
      break;
    case FilterConstants.UPDATE_BOUNDS:
      setBounds(payload.bounds);
      break;
  }
};



module.exports = FilterStore;
