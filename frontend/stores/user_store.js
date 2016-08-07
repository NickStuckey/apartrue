const AppDispatcher = require('../dispatcher/dispatcher'),
      UserConstants = require('../constants/user_constants'),
      Store = require('flux/utils').Store;

const UserStore = new Store(AppDispatcher);

let _user = {};

const resetUser = function (user) {
  _user = user;
  UserStore.__emitChange();
};

UserStore.find = function (id) {
  console.log(id);
  return Object.assign({}, _user[id]);
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.PROFILE_RECIVED:
      resetUser(payload.user);
      break;
  }
};

module.exports = UserStore;
