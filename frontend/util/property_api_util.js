
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
  },

  createProperty (property, cb) {
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
          is_owner: property.isOwner
          }
        },
      success: function (data) {
        cb(data);
      }
    });
  }


};
