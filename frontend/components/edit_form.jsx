const React = require('react'),
      UserActions = require('../actions/user_actions'),
      SessionStore = require('../stores/session_store');

const EditForm = React.createClass({
  getInitialState () {
    let bio = this.props.user.bio;
    let username = this.props.user.username;
    let hometown = this.props.user.hometown;

    return ({
      bio: bio || "",
      imageFile: this.props.user.image_file,
      imageUrl: this.props.user.image_url,
      is_landlord: this.props.user.is_landlord,
      username: username || "",
      hometown: hometown || ""
    });
  },

  availClicked() {
    if (this.state.is_landlord) {
      return "x";
    } else {
      return " ";
    }
  },


  handleSubmit (e) {
    e.preventDefault();

    if (SessionStore.currentUser().username === "GuestUser") {
      this.props.closeModal();
      return;
    }

    let formData = new FormData();
    formData.append("user[bio]", this.state.bio);
    formData.append("user[image]", this.state.imageFile);
    formData.append("user[is_landlord]", this.state.is_landlord);
    formData.append("user[hometown]", this.state.hometown);
    formData.append("user[username]", this.state.username);
    formData.append("user[id]", this.props.user.id);

    this.resetState();

    UserActions.updateUser(this.props.user.id, formData);
  },

  updateBio (e) {
    let bio = e.target.value;
    this.setState({bio: e.target.value});
  },

  updateUsername (e) {    let username = e.target.value;
    this.setState({username: e.target.value});
  },

  updateHometown (e) {
    let hometown = e.target.value;
    this.setState({hometown: e.target.value});
  },

  updateFile (e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  },

  toggleLandlord () {
    this.setState({is_landlord: !this.state.is_landlord});
  },

  resetState () {
    const user = this.props.user;

    this.setState({
      bio: user.bio || "",
      imageFile: user.image_file,
      imageUrl: user.image_url,
      is_landlord: user.is_landlord,
      username: user.username || "",
      hometown: user.hometown || ""
    });
  },

  render () {
    let guestChanges;
    if (SessionStore.currentUser().username === "GuestUser") {
      guestChanges = <p className="warning-label">changes will not be saved for guest user</p>;
    }

    return (
      <div className="edit-modal-wrapper">
        <div className="modal-background"></div>
        <form onSubmit={this.handleSubmit} className="edit-profile-form">
          <p className="edit-form-label">User Name</p>

          <input
            type="text"
            className="form-field"
            onChange={this.updateUsername}
            value={this.state.username}
            />

          <p className="edit-form-label">Are you a landlord?</p>
          <div type="checkbox"
            onClick={this.toggleLandlord}
            className="checkbox"
            >{this.availClicked()}</div>

          <p className="edit-form-label">Hometown</p>
          <input
            type="text"
            className="form-field"
            onChange={this.updateHometown}
            value={this.state.hometown}
            />

          <p className="edit-form-label">Bio</p>
          <textarea
            type="text"
            className="bio-text"
            onChange={this.updateBio}
            value={this.state.bio}
            >
          </textarea>
          <p className="edit-form-label">Profile Picture</p>
          <input type="file" className="upload-button" onChange={this.updateFile}/>
          <div className="two-button-wrapper">
            <button onClick={this.props.closeModal} className="button side-by">Cancel</button>
            <input type="submit" className="button side-by" value="submit"/>
          </div>
          { guestChanges }
        </form>
      </div>
    );
  }
});

module.exports = EditForm;
