module.exports = {
  fetchUser (id, success, error) {
    $.ajax({
      url: `api/users/${id}`,
      type: "GET",
      success,
      error: (xhr) => {
        const errors = xhr.responseJSON;
        error("fetch user", errors);
      }
    });
  }
};
