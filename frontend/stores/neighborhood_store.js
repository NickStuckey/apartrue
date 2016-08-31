const Store = require ('flux/utils').Store,
      AppDispatcher = require ('../dispatcher/dispatcher'),
      NeighborhoodConstants = require('../constants/neighborhood_constants');

let _neighborhoods = [];
const NeighborhoodStore = new Store(AppDispatcher);

NeighborhoodStore.all = function () {
  return _neighborhoods.slice();
};

NeighborhoodStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case NeighborhoodConstants.RECEIVE_NEIGHBORHOODS:
      updateNeighborhoods(payload.neighborhoods);
    break;
  }
};

const updateNeighborhoods = function (neighborhoods) {
  _neighborhoods = Object.keys(neighborhoods).map((id) => {
    return neighborhoods[id];
  });
  NeighborhoodStore.__emitChange();
};

module.exports = NeighborhoodStore;
