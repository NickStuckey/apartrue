const React = require('react'),
      UserActions = require('../actions/user_actions'),
      UserStore = require('../stores/user_store'),
      MyMap = require('./property_map');

const UserProfile = React.createClass({
  getInitialState () {
    return { user: {} };
  },

  componentDidMount () {
    this.usersListener = UserStore.addListener(this._onUsersChange);
    const userId = this.props.params.userId;
    UserActions.fetchUser(userId);
  },

  componentWillUnmount () {
    this.usersListener.remove();
  },

  _onUsersChange () {
    const userId = parseInt(this.props.params.userId);
    const user = UserStore.find(userId);
    // debugger
    this.setState({ user: user });
  },

  render () {
    const user = this.state.user;
    return (
      <div className="content-wrapper">
      <h1>{user.username}</h1>
      <form className="update-profile">
      </form>
      </div>
    );
  }
});

module.exports = UserProfile;
