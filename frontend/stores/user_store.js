const AppDispatcher = require('../dispatcher/dispatcher'),
      UserConstants = require('../constants/user_constants'),
      Store = require('flux/utils').Store;

const UserStore = new Store(AppDispatcher);

let _user = {};

const addUser = function (user) {
  _user[user.id] = user;
  UserStore.__emitChange();
};

UserStore.find = function (id) {
  return Object.assign({}, _user[id]);
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.PROFILE_RECIVED:
      addUser(payload.user);
      break;
  }
};

module.exports = UserStore;
