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
      return <button className="session-button nav-bar-link" onClick={ this.handleLogout }>Log Out</button>;
    } else {
      return <Link to="/login" activeClassName="nav-link nav-bar-link">Log In</Link>;
    }
  },

  // <Image source={require('./my-icon.png')} /> use for home button icon
  render () {
    return (
      <header className="nav-bar-wrapper">
        <div className="nav-bar-background"></div>
          <nav className="nav-bar ">
            <a href="#/" className="home-button nav-bar-link">aparTrue</a>
            <ul className="nav-buttons">
              { this.sessionOption() }
            </ul>
          </nav>
      </header>
    );
  }
});

module.exports = NavBar;
