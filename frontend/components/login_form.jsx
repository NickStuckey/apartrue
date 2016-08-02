const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

const LoginForm = React.createClass ({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },


  componentDidMount () {
    this.sessionListener = SessionStore.addEventListener(this.redirectIfLoggedIn);
  },

  formType() {
    return this.props.location.pathname.slice(1);
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

    if (this.props.location.pathname === "/login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.signUp(formData);
    }
  },

  updateUsernameFeild (e) {
    this.setState({username: e.target.value});
  },

  updatePasswordFeild (e) {
    this.setState({password: e.targe.value});
  },

  redirectIfLoggedIn () {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  render () {
    let navLink;
    if (this.formType() === "login") {
      navLink = <Link to="/signup">create new account</Link>;
    } else {
      navLink = <Link to="/login">login</Link>;
    }

    return (
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-from">
          <input
            type="text"
            value={this.props.username}
            onChange={this.updateUsernameFeild}
            className="login-form-input-feild"
            />

          <input
            type="password"
            value={this.props.username}
            onChange={this.updatePasswordFeild}
            className="login-form-input-feild"
            />
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }

});

module.exports = LoginForm;
