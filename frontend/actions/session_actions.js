const AppDispatcher = require('../dispatcher/dispatcher'),
      SessionStore = require('../stores/session_store'),
      SessionConstants = require('../constants/session_constants'),
      SessionApiUtil = require('../util/session_api_util'),
      ErrorActions = require('./error_actions'),
      hashHistory = require('react-router').hashHistory;

const SessionActions = {
  signUp(formData) {
    SessionApiUtil.signUp(
      formData,
      this.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logIn(formData) {
    SessionApiUtil.logIn(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logOut() {
    SessionApiUtil.logOut(this.removeCurrentUser);
  },

  fetchCurrentUser() {
    SessionApiUtil.fetchCurrentUser(
      this.receiveCurrentUser,
      complete
    );
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser () {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
    hashHistory.push("/login");
  }

};

module.exports = SessionActions;
