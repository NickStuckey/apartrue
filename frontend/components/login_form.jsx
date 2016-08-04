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

  showErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1).toLowerCase();
  },

  getInitialState () {
    return ({username: "", password: ""});
  },

  guestLogin () {
    console.log('log in guest');
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
      this.context.router.push("/");
    }
  },

  render () {
    let navLink, navHeader, button;
    if (this.formType() === "login") {
      navLink = <Link className="sign-in-navLink" to="/signup">create new account</Link>;
      button = "Log In";
      navHeader = "Login to your account";
    } else {
      navLink = <Link className="sign-in-navLink" to="/login">login</Link>;
      button = "Sign Up";
      navHeader = "Create a new account";
    }

    return (
      <div className="centering-page-wrapper">
        <div className="login-box-wrapper">

          <div className="login-box guest-login-box">
            <h1 className="login-box-header guest-boxheader">
              Have a look around with a <span className="highlighted-phrase">Guest Acount</span>
            </h1>

            <h6 className="foot-note">No sign-up required, just click here to get started!</h6>

            <button onClick={this.guestLogin} className="button welcome-button">
              Welcome
            </button>
          </div>

          <div className="login-spacer-box">Or</div>

          <div className="login-box user-login-box">
            <h1 className="login-box-header">{ navHeader }</h1>
            { this.showErrors(this.formType()) }
            <form onSubmit={this.handleSubmit} className="login-form">
              { this.showErrors('username') }

              <input
                type="text"
                value={this.props.username}
                onChange={this.updateUsernameFeild}
                className="login-form-input-field"
                placeholder="username"
                />
              <br></br>
            { this.showErrors('password') }
              <input
                type="password"
                value={this.props.username}
                onChange={this.updatePasswordFeild}
                className="login-form-input-field"
                placeholder="password"
                />
              <br></br>

              <input className="sign-in-button button" type="submit" value={button}/>
            </form>
            { navLink }
          </div>
        </div>
      </div>
    );
  }

});

module.exports = LoginForm;
