const React = require('react'),
      UserActions = require('../actions/user_actions'),
      UserStore = require('../stores/user_store'),
      MyMap = require('./property_map');

const UserProfile = React.createClass({
  getInitialState () {
    debugger
    const userId = parseInt(this.props.params.userId);
    const user = UserStore.find(userId);
    return { user };
  },

  componentDidMount () {
    debugger
    const userId = this.props.params.userId;
    this.usersListener = UserStore.addListener(this._onUsersChange);
    UserActions.fetchUser(userId);
  },

  _onUsersChange () {
    debugger
    const userId = parseInt(this.props.params.userId);
    const user = UserStore.find(userId);
    this.setState({ user });
  },

  render () {
    debugger // NOTE stoped here, need to figure out why user is empty object
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
