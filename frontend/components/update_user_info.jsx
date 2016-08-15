const React = require('react');


const UpdateUserInfo = React.createClass ({
  getInitialState () {
    return ({
      user: {
        username: this.props.user.username,
        userBio: this.props.user.userBio,
        userPic: this.props.user.image_url,
        userReviews: null
      },
      slide: false,
    });
  },

  componentDidMount() {
  },

  toggleUserForm () {
    if (this.state.slide) {
      $(this.refs.slide).slideDown();
      this.setState({slide: true});
    } else {
      $(this.refs.slide).slideUp();
      this.setState({slide: false});
    }
  },

  render () {
    return (
      <div className="update-user-info-component-wrapper">
      <button className="button" onClick={this.toggleUserForm}>update info</button>
        <div className="slide-down-form" ref="slide">
          <form className="update-profile">
            <input
              type="text"
              className="input-feild username"
              value={this.state.username}
              onChange={this.updateUsername}
              />
            <input
              type="text"
              className="input-feild userBio"
              value={this.state.userbio}
              onChange={this.updateUserbio}
              />
          </form>
      </div>
      </div>
    );
  }
});


module.exports = UpdateUserInfo;
