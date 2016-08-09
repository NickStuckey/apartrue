const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      SearchFields = require('./search_feilds'),
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store');

const NavBar = React.createClass ({
  handleLogout () {
    SessionActions.logOut();
    hashHistory.push("/searchform");
  },

  sessionOption () {
    if (SessionStore.isUserLoggedIn) {
      return <button className="session-button" onClick={ this.handleLogout }>Log Out</button>;
    } else {
      return <Link to="/login" activeClassName="nav-link">Log In</Link>;
    }
  },

  render () {
    return (
      <header className="nav-bar-wrapper">
        <nav className="nav-bar"></nav>
          <a hreg="/" className="home-button"><Image source={require('./my-icon.png')} />
          { SearchFields }
        <ul className="nav-buttons">
          { this.sessionOption() }
        </ul>
      </header>
    );
  }
});

module.exports = NavBar;
