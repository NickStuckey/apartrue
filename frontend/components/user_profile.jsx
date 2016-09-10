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
    let userId = this.props.params.userId;
    UserActions.fetchUser(userId);
    ReviewActions.fetchUserReviews(userId);
  },

  componentWillUnmount () {
    this.usersListener.remove();
    this.reviewsListener.remove();
  },

  _onUsersChange () {
    let userId = parseInt(this.props.params.userId);
    let user = UserStore.find(userId);
    this.hideEditForm();
    this.setState({ user: user });
  },

  _onReviewsChange () {
    let userReviews = ReviewStore.all();
    let x;
    this.setState({userReviews: userReviews});
  },

  showEditForm () {
    editModal = <EditForm user={this.state.user}/>;
    this.forceUpdate();
  },

  hideEditForm () {
    editModal = null;
    this.forceUpdate();
  },

  showReviews () {
    let reviewObject = this.state.userReviews;
    let reviewsArray = Object.keys(reviewObject).map((revId) => {
      let review = reviewObject[revId];
      return <SingleReview key={revId} review={review}/>;
    });

    return reviewsArray;
  },

  render () {
    let updateForm, userReviews, editButton;
    if (SessionStore.isUserLoggedIn() == this.props.params.userId) {
          editButton = <button className="edit-link" onClick={ this.showEditForm }>Edit</button>;
    }

    if (this.state.userReviews) {
      userReviews = this.showReviews();
    }

    let user = this.state.user;
    let landlord = user.is_landlord ? "Yes" : "No";
    return (
      <div className="content-wrapper">
        { editModal }
        <div className="profile-content group">
          <h1 className="username">{user.username}</h1>
          <div className="picture-frame">
            <img className="profile-pic" src={user.image_url}/>
          </div>
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
          { editButton }
        </div>
        { userReviews }
      </div>
    );
  }
});


module.exports = UserProfile;
