module.exports = {
  fetchAllProperties (bounds, cb) {
    $.ajax({
    url: "api/properties",
    type: "GET",
    data: {bounds: bounds},
    success: function (data) {
      cb(data);
    }
  });


}};
