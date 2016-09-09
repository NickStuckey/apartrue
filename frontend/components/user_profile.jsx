const React = require('react'),
      SessionStore = require('../stores/session_store'),
      UserActions = require('../actions/user_actions'),
      UserStore = require('../stores/user_store'),
      UpdateUserInfo = require('./update_user_info'),
      SingleReview = require('./single_review'),
      ReviewStore = require('../stores/review_store'),
      ReviewActions = require('../actions/review_actions'),
      EditForm = require('./edit_form'),
      MyMap = require('./property_map');

let editModal;
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

  showEditForm () {
    editModal = <EditForm user={this.state.user}/>;
    this.forceUpdate();
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
    const landlord = user.is_landlord ? "Yes" : "No";
    return (
      <div className="content-wrapper">
        { editModal }
        <div className="profile-content group">
          <h1 className="username">{user.username}</h1>
          <img className="profile-pic" src={user.image_url}/>
          <p className="user-bio">{ user.bio }</p>
          <ul className="user-stats">
            <li className="stat">
              <h3>Hometown</h3>
              <p>{ user.hometown }</p>
              <h3># of reviews</h3>
              <p>{ user.num_reviews }</p>
              <h3>Landlord?</h3>
              <p>{ landlord }</p>
              <h3>Member Since</h3>
              <p>{ user.member_since }</p>
            </li>
          </ul>
          <button className="edit-link" onClick={ this.showEditForm }>Edit</button>
        </div>
        { updateForm }
        { userReviews }
      </div>
    );
  }
});


module.exports = UserProfile;
