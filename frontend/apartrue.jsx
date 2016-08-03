import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const ReactDOM = require('react-dom'),
      React = require('react'),
      LogInForm = require('./components/login_form'),
      LogOutButton = require('./components/logout_button'),
      SessionStore = require('./stores/session_store');


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
        <div className="test">
          hello
        </div>
        { this.logOutButton() }
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <Route path="login" component={ LogInForm }/>
      <Route path="signup" component={ LogInForm }/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('content');
  ReactDOM.render(routes, root);
});
