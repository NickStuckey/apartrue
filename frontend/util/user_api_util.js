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
  },

  updateUser (id, formData, success, error) {
    $.ajax({
      url: `api/users/${id}`,
      type: "PATCH",
      dataType: "json",
      contentType: false,
      processData: false,
      data: formData,
      success,
      error: (xhr) => {
        const errors = xhr.responseJSON;
        error("update user", errors);
      }
    });
  }
};
