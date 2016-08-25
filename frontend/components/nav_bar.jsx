const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      SearchFields = require('./search_fields'),
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store');

const NavBar = React.createClass ({
  getInitialState () {
    return {user: null};
  },

  componentDidMount () {
    self.sessionListener = SessionStore.addListener(this._onSessionChange);
  },

  handleLogout () {
    SessionActions.logOut();
    hashHistory.push("/searchform");
  },

  _onSessionChange () {
    this.setState({user: SessionStore.currentUser()});
    this.forceUpdate();
  },

  sessionOption () {
    if (SessionStore.isUserLoggedIn()) {
      return <button onClick={ this.handleLogout }>Log Out</button>;
    } else {
      if (hashHistory[-1] !== "/login")
        return <a href="#/login" >Log In</a>;
    }
  },

  profileOption () {
    const user = SessionStore.currentUser();
    if (user.id) {
      const path = `#/users/${user.id}`;
      return <a href={path} >Profile</a>;
    }
  },

  render () {

    const sessionOption = this.sessionOption();
    const profileOption = this.profileOption();

    return (
      <header className="nav-bar-wrapper">
        <div className="nav-bar-background"></div>
          <nav className="nav-bar ">
            <a href="#/searchform" className="home-button hoverable">aparTrue</a>
            <ul className="link-list">
              <li className="nav-link hoverable"><a href="#/searchform" >search</a></li>
              <li className="nav-link hoverable">{sessionOption }</li>
              <li className="nav-link hoverable">{ profileOption }</li>
            </ul>
          </nav>
      </header>
    );
  }
});

module.exports = NavBar;
