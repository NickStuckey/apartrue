const AppDispatcher = require('../dispatcher/dispatcher'),
      SessionStore = require('../stores/session_store'),
      SessionConstants = require('../constants/session_constants'),
      SessionApiUtil = require('../util/session_api_util'),
      ErrorActions = require('./error_actions');

const SessionActions = {
  signUp(formData) {
    SessionApiUtil.signUp(
      formData,
      sessionActions.receiveCurrentUser,
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

  removeCurrentUser (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
      currentUser: currentUser
    });
  }

};

module.exports = SessionActions;
