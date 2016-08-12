import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const ReactDOM = require('react-dom'),
      React = require('react'),
      LogInForm = require('./components/login_form'),
      SessionActions = require('./actions/session_actions'),
      SessionStore = require('./stores/session_store'),
      PropertyMap = require('./components/property_map'),
      SearchResults = require('./components/search_results'),
      ShowProperty = require('./components/show_property'),
      Modal = require('react-modal'),
      UserProfile = require('./components/user_profile');

//testing only
let PropertyApiUtil = require('./util/property_api_util'),
    PropertyIndex = require('./components/property_index'),
    SearchForm = require('./components/search_form'),
    AddressFinder = require('./components/address_finder'),
    NavBar = require('./components/nav_bar'),
    ReviewForm = require('./components/review_form'),
    PropertyForm = require('./components/property_form');

const App = React.createClass ({

  render () {

    return (
      <div className="app-wrapper">
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
});
// <div className="footer">apartrue  (:</div>

window.PropertyApiUtil = PropertyApiUtil;

const routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ SearchForm } />
      <Route path="searchform" component={ SearchForm } />
      <Route path="login" component={ LogInForm }/>
      <Route path="signup" component={ LogInForm }/>
      <Route path="results" component={ SearchResults }/>
      <Route path="properties/new" component={ PropertyForm } />
      <Route path="properties/:propertyId" component={ ShowProperty } />
      // NOTE testing only NOTE NB NOTE testing only NOTE
      <Route path="map" component={ PropertyMap }/>
      <Route path="index" component={ PropertyIndex }/>
      <Route path="users/:userId" component={ UserProfile } />
      <Route path="address" component={ AddressFinder } />
      <Route path="reviewform" component={ ReviewForm } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('content');
  Modal.setAppElement(document.body);

  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  } else {
    SessionActions.receiveCurrentUser({});
  }
  ReactDOM.render(routes, root);
});
