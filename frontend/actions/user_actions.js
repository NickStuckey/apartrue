const UserApiUtil = require('../util/user_api_util'),
      UserConstants = require('../constants/user_constants'),
      AppDispatcher = require('../dispatcher/dispatcher'),
      ErrorActions = require('../actions/error_actions');

const UserActions = {
  fetchUser (id) {
    UserApiUtil.fetchUser(
      id,
      UserActions.receiveUser,
      ErrorActions.setErrors
    );
  },

  receiveUser (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.PROFILE_RECIVED,
      user: user
    });
  }
};

module.exports = UserActions;
