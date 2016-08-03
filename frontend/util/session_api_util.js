const SessionApiUtil = {
  logIn (user, success, error) {
    $.ajax({
      url: `api/session`,
      type: 'POST',
      dataType: "JSON",
      data: {user: user},
      success,
      error: (xhr) => {
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    });
  },

  logOut (success) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success,
      error: function () {
      console.log("Logout error in SessionApiUtil#logout");
    }
    });
  },

  signUp(user, success, error) {
  $.ajax({
    url: '/api/users',
    type: 'POST',
    dataType: 'json',
    data: { user: user },
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
