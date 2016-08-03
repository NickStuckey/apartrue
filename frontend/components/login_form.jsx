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
    let navLink, button;
    if (this.formType() === "login") {
      navLink = <Link to="/signup">create new account</Link>;
      button = "Log In";
    } else {
      navLink = <Link to="/login">login</Link>;
      button = "Sign Up";
    }

    return (
      <div className="login-page-wrapper">
        <div className="login-wrapper guest-login-wrapper">
          guest form
        </div>

        <div className="login-wrapper login-form-wrapper">
          { this.showErrors(this.formType()) }
          <form onSubmit={this.handleSubmit} className="login-form">
            { this.showErrors('username') }
            <label>Username
              <input
                type="text"
                value={this.props.username}
                onChange={this.updateUsernameFeild}
                className="login-form-input-feild"
                />
            </label>

            <br></br>

            { this.showErrors('password') }
            <label>Password
              <input
                type="password"
                value={this.props.username}
                onChange={this.updatePasswordFeild}
                className="login-form-input-feild"
                />
            </label>

            <br></br>

            <input type="submit" value={button}/>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = LoginForm;
