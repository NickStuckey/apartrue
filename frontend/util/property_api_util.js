module.exports = {

  createProperty (formData, success, error) {
    $.ajax({
      url: "api/properties",
      type: "POST",
      contentType: false,
      processData: false,
      data: formData,
      success,
      error: function (xhr) {
        const errors = xhr.responseJSON;
      }
    });
  },

  fetchAllPropertiesWithParams (filters, success, error) {
    $.ajax({
      url: "api/properties",
      type: "GET",
      data: {
        property: {
          bounds: filters.bounds,
          price: filters.priceLimit,
          num_bedrooms: filters.bedrooms,
          neighborhood_id: filters.neighborhoodId,
          }
        },
      success,
      error: function (xhr) {
        const errors = xhr.responseJSON;
      }
    });
  },

  fetchAllProperties (success, error) {
    $.ajax({
      url: "api/properties",
      type: "GET",
      data: {property: {address:"dummy"}},
      success,
      error: function (xhr) {
        const errors = xhr.responseJSON;
      }
    });
  },

  fetchProperty (id, success, error) {
    $.ajax({
      url: `api/properties/${id}`,
      type: "GET",
      success,
      error: function (xhr) {
        const errors = xhr.responseJSON;
      }
    });
  },

};
