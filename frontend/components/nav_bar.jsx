const React = require('react'),
      LogInButton = require('components/login_button'),
      hashHistory = require('react-router').hashHistory,
      SessionStore = require('../stores/session_store');

const NavBar = React.createClass ({
  getInitialState() {
    return({
      searchFeilds: null,
    });
  },

  componentDidMount () {
    this.sessionListener = SessionStore.addListener(this.toggleSession);
  },

  _checkLoggedIn () {
    if (sessionStore.isUserLoggedIn) {
      return <button onClick={this.handleLogout}>Log Out</button>;
    } else {
      return <LogInButton />;
    }
  },

  handleLogout () {
    SessionActions.logOut();
    // check current route and redirect if on a sensitive page
  },

  render () {
    const sessionOption = _checkLoggedIn();
    return (
        <div>
          <Link to="/"></Link>
          { searchFeilds }
          <ul>
            <li><Link to="/">Search</Link></li>
            <li>{ sessionOption }</li>
          </ul>

        </div>
    );
  }
});
