const AppDispatcher = require('../dispatcher/dispatcher'),
      neighborhoodConstants = require('../constants/neighborhood_constants'),
      NeighborhoodApiUtil = require('../util/neighborhood_api_util');

const NeighborhoodActions = {
  fetchAllNeighbrohoods() {
    NeighborhoodApiUtil.fetchAllNeighborhoods(this.receiveNeighborhoods);
  },

  receiveNeighborhoods(neighborhoods) {
    AppDispatcher.dispatch({
      neighborhoods: neighborhoods,
      actionType: neighborhoodConstants.RECEIVE_NEIGHBORHOODS
    });
  }
};

module.exports = NeighborhoodActions;
