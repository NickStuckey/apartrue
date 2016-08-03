const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions');


const LogOutButton = React.createClass({

  handleLogout () {
    SessionActions.logOut();
  },

  render () {
    return (<button onClick={ this.handleLogout }>Log Out</button>);
  }
});

module.exports = LogOutButton;
