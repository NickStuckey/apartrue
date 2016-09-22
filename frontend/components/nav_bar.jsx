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

  goTo (type) {
    switch (type) {
    case 'search':
      hashHistory.push("/searchform");
      break;
    case 'session':
      this.sessionActions();
      break;
    case 'profile':
     this.profileAction();
     break;
    }
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
    return SessionStore.isUserLoggedIn() ? 'Log Out' : 'Log In';
  },

  profileAction () { // NOTE CHANGE THIS SO IT GOES TO THE APPROPRIATE USER< RIGHT NOW IT"S GOING TO Last profile visited
    const user = SessionStore.currentUser();
    if (user.id) {
      hashHistory.push(`/users/${user.id}`);
      }
    },

  profileOption () {
    return SessionStore.isUserLoggedIn() ? 'Profile' : '';
  },

  sessionActions () {
    if (SessionStore.isUserLoggedIn()) {
      this.handleLogout();
    } else {
      if (hashHistory[-1] !== "/login")
        hashHistory.push("/login");
    }
  },

  render () {
    const sessionOption = this.sessionOption();
    const profileOption = this.profileOption();

    return (
      <header className="nav-bar-wrapper">
        <div className="nav-bar-background"></div>
          <nav className="nav-bar ">
            <a href="#/searchform" className="home-button hoverable hoverable-color">aparTrue</a>
            <ul className="link-list">
              <li className="nav-link hoverable-color hoverable" onClick={ () => this.goTo('search') }>search</li>
              <li className="nav-link hoverable-color hoverable" onClick={ () => this.goTo('session') }>{ sessionOption }</li>
              <li className="nav-link hoverable-color hoverable" onClick={ () => this.goTo('profile') }>{ profileOption }</li>
            </ul>
          </nav>
      </header>
    );
  }
});

module.exports = NavBar;
