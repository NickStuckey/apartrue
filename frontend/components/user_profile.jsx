const React = require('react'),
      UserActions = require('../actions/user_actions'),
      UserStore = require('../stores/user_store'),
      MyMap = require('./property_map');

const UserProfile = React.createClass({
  getInitialState () {
    const userId = parseInt(this.props.params.userId);
    // const user = UserStore.find(userId);
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
    this.setState({ user });
  },

  render () {
    let user = this.state.user;
    let userInfo = Object.keys(user).map((detail, i) => {
      return <li key={i} className="user-info-list-item">{user[detail]}</li>;
    });
    return (
      <div>{ userInfo }</div>
    );
  }
});

module.exports = UserProfile;
