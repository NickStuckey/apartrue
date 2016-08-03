const SessionApiUtil = {
  logIn (user, success, error) {
    $.ajax({
      url: `api/session`,
      type: 'POST',
      data: {formData: formData}, // NOTE this probably won't work, figure out how to format
      success,
      errors(xhr) {
        const errors = xhr.responseJSON;
        error("signup", errors);
      }
    });
  },

  logOut (user, success, error) {
    $.ajax({
      url: '/api/session',
      method: 'delete',
      success,
      error: function () {
      console.log("Logout error in SessionApiUtil#logout");
    }
    });
  },

  signUp(user, success, error) {
  $.ajax({
    url: '/api/user',
    type: 'POST',
    dataType: 'json',
    data: { user },
    success,
    error(xhr) {
      const errors = xhr.responseJSON;
      error("signup", errors);
    }
  });
},

fetchCurrentUser(success, complete) {
  $.ajax({
    url: '/api/session',
    method: 'GET',
    success,
    error: function (xhr) {
      console.log("Error in SessionApiUtil#fetchCurrentUser");
    },
    complete: function(){
      complete();
    }
  });
}
};

module.exports = SessionApiUtil;
