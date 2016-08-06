import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const ReactDOM = require('react-dom'),
      React = require('react'),
      LogInForm = require('./components/login_form'),
      LogOutButton = require('./components/logout_button'),
      SessionActions = require('./actions/session_actions'),
      SessionStore = require('./stores/session_store'),
      PropertyMap = require('./components/property_map'),
      Search = require('./components/search');

//testing only
let PropertyApiUtil = require('./util/property_api_util'),
    PropertyIndex = require('./components/property_index'),
    PropertyForm = require('./components/property_form');

const App = React.createClass ({
  logOutButton() {
    let button;
    if (SessionStore.isUserLoggedIn()) {
      button = <LogOutButton/>;
    }
    return button;
  },

  render () {

    return (
      <div className="app-wrapper">

        <div className="header"></div>
        { this.logOutButton() }
        {this.props.children}
      </div>
    );
  }
});

window.PropertyApiUtil = PropertyApiUtil;

const routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ LogInForm} />
      <Route path="login" component={ LogInForm }/>
      <Route path="signup" component={ LogInForm }/>
      <Route path="map" component={ PropertyMap }/>
      <Route path="search" component={ Search }/>

      //NOTE testing only NOTE NB NOTE testing only NOTE
      <Route path="index" component={ PropertyIndex }/>
      <Route path="newprop" component={ PropertyForm } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('content');

  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  } else {
    SessionActions.receiveCurrentUser({});
  }
  ReactDOM.render(routes, root);
});
