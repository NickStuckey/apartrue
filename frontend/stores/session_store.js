const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};
let _currentUserHasBeenFetched = false;

const _login = function(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
};

const _logout = function() {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.formData);
      this.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout(payload.formData);
      this.__emitChange();
      break;
  }
};

module.exports = SessionStore;
