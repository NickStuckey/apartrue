const AppDispatcher = require('../dispatcher/dispatcher'),
      FilterConstants = require('../constants/filter_constants');

const FilterActions = {
  updateFilters (filters) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_FILTERS,
      filters: filters
    });
  },

  updateBounds (bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BOUNDS,
      bounds: bounds
    });
  }
};

module.exports = FilterActions;
