const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

const SessionStore = new Store(AppDispatcher);
let _currentUser = {};

const _login = function(currentUser) {
  _currentUser = currentUser;
  SessionStore.__emitChange();
};

const _logout = function() {
  _currentUser = {};
  SessionStore.__emitChange();
};

SessionStore.userId = function() {
  return _currentUser.id;
};

SessionStore.isUserLoggedIn = function() {
  return _currentUser.id;
};

SessionStore.currentUser = function () {
  return Object.assign({}, _currentUser);
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      this.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout();
      this.__emitChange();
      break;
  }
};

module.exports = SessionStore;
