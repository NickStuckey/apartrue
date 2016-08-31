module.exports = {
  fetchAllNeighborhoods (success) {
    $.ajax({
      url: "api/neighborhoods",
      type: "GET",
      success: success
    });
  }
};
