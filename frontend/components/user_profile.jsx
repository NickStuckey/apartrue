const React = require('react'),
      SessionStore = require('../stores/session_store'),
      UserActions = require('../actions/user_actions'),
      UserStore = require('../stores/user_store'),
      UpdateUserInfo = require('./update_user_info'),
      SingleReview = require('./single_review'),
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
    ReviewActions.fetchUserReviews(userId);
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
    let x;
    this.setState({userReviews: userReviews});
  },

  showReviews () {
    const reviewObject = this.state.userReviews;
    const reviewsArray = Object.keys(reviewObject).map((revId) => {
      const review = reviewObject[revId];
      return <SingleReview key={revId} review={review}/>;
    });

    return reviewsArray;
  },

  render () {
    let updateForm, userReviews;
    if (SessionStore.isUserLoggedIn() &&
        SessionStore.currentUser().id === this.props.params.userId) {
          updateForm = <UpdateUserInfo user={this.state.user}/>;
    }

    if (this.state.userReviews) {
      userReviews = this.showReviews();
    }

    const user = this.state.user;
    return (
      <div className="content-wrapper">
        <h1>Reviews by {user.username}</h1>
        { userReviews }
        { updateForm }
      </div>
    );
  }
});

module.exports = UserProfile;
