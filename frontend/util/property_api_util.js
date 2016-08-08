
module.exports = {

  createProperty (property, success, error) {
    $.ajax({
      url: "api/properties",
      type: "POST",
      data: {
        property: {
          address: property.address,
          zipcode: property.zipcode,
          price: property.price,
          num_bedrooms: property.numBedRooms,
          available: property.available,
          lat: property.lat,
          lng: property.lng,
          city: property.city,
          owner_id: property.ownerId
          }
        },
      success,
      error: function (xhr) {
        const errors = xhr.responseJSON;
        // not yet saving to error store
        console.log("createProperty", errors);
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
        // not yet saving to error store
        console.log("fetch all properties with params", errors);
      }
    });
  },

  fetchAllProperties (success, error) {
    $.ajax({
      url: "api/properties",
      type: "GET",
      data: {property: {}},
      success,
      error: function (xhr) {
        const errors = xhr.responseJSON;
        // not yet saving to error store
        console.log("fetch all properties", errors);
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
        // not yet saving to error store
        console.log("fetch property", errors);
      }
    });
  }

};
