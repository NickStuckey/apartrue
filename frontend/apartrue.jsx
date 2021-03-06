import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const ReactDOM = require('react-dom'),
      React = require('react'),
      LogInForm = require('./components/login_form'),
      SessionActions = require('./actions/session_actions'),
      PropertyMap = require('./components/property_map'),
      SearchResults = require('./components/search_results'),
      ShowProperty = require('./components/show_property'),
      Modal = require('react-modal'),
      UserProfile = require('./components/user_profile'),
      PropertyForm = require('./components/property_form'),
      PropertyIndex = require('./components/property_index'),
      AddressFinder = require('./components/address_finder'),
      NavBar = require('./components/nav_bar'),
      ReviewForm = require('./components/review_form'),
      PropertyApiUtil = require('./util/property_api_util'),
      SearchForm = require('./components/search_form');

const App = React.createClass ({
  render () {
    return (
      <div className="app-wrapper">
        <NavBar/>
        {this.props.children}
        <div id="rotating-photo-background"></div>
      </div>
    );
  }
});

const routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ LogInForm } />
      <Route path="searchform" component={ SearchForm } />
      <Route path="login" component={ LogInForm }/>
      <Route path="signup" component={ LogInForm }/>
      <Route path="results" component={ SearchResults }/>
      <Route path="properties/new" component={ PropertyForm } />
      <Route path="properties/:propertyId" component={ ShowProperty } />
      <Route path="users/:userId" component={ UserProfile } />
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
