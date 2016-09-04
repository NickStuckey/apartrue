module.exports = {
  updateMapCenter (id) {
    let center;
    switch (parseInt(id)) {
      case 1: // Manhattan
        center = {lat: 40.75662, lng: -73.985367};
        break;
      case 2: // Brooklyn
        center = {lat: 40.676993, lng: -73.940048};
        break;
      case 3: // Queens
        center = {lat: 40.728007, lng: -73.796539};
        break;
      case 4: // Bronx
        center = {lat: 40.87043, lng: -73.881683};
        break;
      case 5: // Staten Island
        center = {lat: 40.584235, lng: -74.150848};
        break;
      }
    return center;
  },

  defaultCenter () {
    return {lat: 40.75662, lng: -73.985367};
  }
};
