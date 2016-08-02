const AppDispatcher = require('../dispatcher/dispatcher'),
      SessionStore = require('../stores/session_store'),
      SessionConstants = require('../constants/Session_constants'),
      SessionApiUtil = require('../util/session_api_util');

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
    SessionApiUtil.logOut(SessionActions.removeCurrentUser);
  },

  fetchCurrentUser() {
    SessionApiUtil.fetchCurrentUser(
      SessionActions.receiveCurrentUser,
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
