const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const Link = require('react-router').Link;
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount () {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  errors () {

  },

  showErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li className="error-list-item" key={ i }>{ errorMsg }</li>;
    });

    return <ul className="error-list">{ messages }</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1).toLowerCase();
  },

  getInitialState () {
    return ({username: "", password: ""});
  },

  guestLogin () {
    SessionActions.logIn({username: 'GuestUser', password: 'password'});
  },

  handleSubmit (e) {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      password: this.state.password
    };

    if (this.props.location.pathname.toLowerCase() === "/login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.signUp(formData);
    }
  },

  updateUsernameFeild (e) {
    this.setState({username: e.target.value});
  },

  updatePasswordFeild (e) {
    this.setState({password: e.target.value});
  },

  redirectIfLoggedIn () {
    if (SessionStore.isUserLoggedIn()) {
      const userId = SessionStore.userId();
      this.context.router.push(`/users/${userId}`);
    }
  },

  render () {
    let navLink, navHeader, button, linkText, route;
    if (this.formType() === "login") {
      linkText = "Sign Up";
      route = "/signup";
      navLink = <Link className="sign-in-navLink" to="/signup">create new account</Link>;
      button = "Log In";
      navHeader = "Login to your account";
    } else {
      linkText = "Sign In";
      route = "/login";
      navLink = <Link className="sign-in-navLink" to="/login">login</Link>;
      button = "Sign Up";
      navHeader = "Create a new account";
    }

    return (
      <div className="centering-page-wrapper">
        <div className="login-box-wrapper">
          <p className="errors">{ this.errors }</p>
          <div className="login-box guest-login-box">
            <div className="guest-login-content-wrapper">
              <h1 className="login-box-header guest-boxheader">
                Have a look around with a <span className="highlighted-phrase">Guest Account</span>
              </h1>

              <h6 className="foot-note">No sign-up required, just click here to get started!</h6>

              <button onClick={this.guestLogin} className="button welcome-button">
                Welcome
              </button>
            </div>
          </div>

          <div className="login-spacer-box">Or</div>

          <div className="login-box user-login-box">
            <div className="login-content-wrapper">
              <h1 className="login-box-header">{ navHeader }</h1>

              <form onSubmit={this.handleSubmit} className="login-form">
                  <div className="error-list-place-holder username-error">

                    { this.showErrors(this.formType()) }
                    { this.showErrors('username') }
                  </div>
                  <input
                    type="text"
                    value={this.props.username}
                    onChange={this.updateUsernameFeild}
                    className="login-form-input-field login-form-username-feild"
                    placeholder="username"
                    />

                  <div className="error-list-place-holder password-error">

                    { this.showErrors('password') }
                  </div>
                  <input
                    type="password"
                    value={this.props.username}
                    onChange={this.updatePasswordFeild}
                    className="login-form-input-field login-form-password-feild"
                    placeholder="password"
                    />

                <input className="sign-in-button button" type="submit" value={button}/>
              </form>
              <Link className="sign-in-navLink" to={route}>{linkText}</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
// <div className="sign-log-in-link-wrapper">{ navLink }</div>

module.exports = LoginForm;
