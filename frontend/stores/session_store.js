const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;

const SessionStore = new Store(AppDispatcher);


module.exports = SessionStore;
