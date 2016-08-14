const React = require('react'),
      SessionStore = require('../stores/session_store'),
      UserActions = require('../actions/user_actions'),
      UserStore = require('../stores/user_store'),
      UpdateUserInfo = require('./update_user_info'),
      ReviewStore = require('../stores/review_store'),
      ReviewActions = require('../actions/review_actions'),
      MyMap = require('./property_map');

const UserProfile = React.createClass({
  getInitialState () {
    return {
      user: {},
      slide: false,
      userReviews: null
     };
  },

  componentDidMount () {
    this.usersListener = UserStore.addListener(this._onUsersChange);
    this.reviewsListener = ReviewStore.addListener(this._onReviewsChange);
    const userId = this.props.params.userId;
    UserActions.fetchUser(userId);
    // ReviewActions.fetchUserReviews(userId);  NOTE flux not set up yet for user specific reviews
  },

  componentWillUnmount () {
    this.usersListener.remove();
    this.reviewsListener.remove();
  },

  _onUsersChange () {
    const userId = parseInt(this.props.params.userId);
    const user = UserStore.find(userId);
    this.setState({ user: user });
  },

  _onReviewsChange () {
    const userReviews = ReviewStore.all();
    this.setState({userReviews: userReviews});
  },

  render () {
    let updateForm, userReviews;
    if (SessionStore.isUserLoggedIn() &&
        SessionStore.currentUser().id === this.props.params.userId) {
          updateForm = <UpdateUserInfo user={this.state.user}/>;
    }

    if (this.state.reviews) {
      const reviews = this.state.reviews;
      userReviews = Object.keys(reviews).map((revKey) => {
        return reviews[revKey]; // NOTE probably going to convert the review store to array so this wont be nessecary
      });
    }


    const user = this.state.user;
    return (
      <div className="content-wrapper">
        <h1>{user.username}</h1>
        { userReviews }
        { updateForm }
      </div>
    );
  }
});

module.exports = UserProfile;
