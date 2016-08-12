const React = require('react'),
      UserActions = require('../actions/user_actions'),
      UserStore = require('../stores/user_store'),
      MyMap = require('./property_map');

const UserProfile = React.createClass({
  getInitialState () {
    const userId = parseInt(this.props.params.userId);
    return { user: {} };
  },

  componentDidMount () {
    this.usersListener = UserStore.addListener(this._onUsersChange);
    const userId = this.props.params.userId;
    UserActions.fetchUser(userId);
  },

  _onUsersChange () {
    const userId = parseInt(this.props.params.userId);
    const user = UserStore.find(userId);
    this.setState({ user: user });
  },

  render () {
    const user = this.state.user;
    return (
      <div className="content-wrapper">
      <h1>{user.username}</h1>
      </div>
    );
  }
});

module.exports = UserProfile;
