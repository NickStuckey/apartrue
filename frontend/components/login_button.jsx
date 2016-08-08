const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions');


const LogInButton = React.createClass({

//
// FIXME: MAKE THIS A MODEL!!!!!!! NOTE NOTE NOTE NOTE
//

  render () {
    return (
      <Link to="/login" activeClassName="nav-component">Log In</Link>
    );
  }
});

module.exports = LogInButton;
