const React = require('react'),
      UserActions = require('../actions/user_actions');

const EditForm = React.createClass({
  getInitialState () {
    return ({
      bio: this.props.user.bio,
      imageFile: this.props.user.image_file,
      imageUrl: this.props.user.image_url,
      is_landlord: this.props.user.is_landlord,
      username: this.props.user.username,
      hometown: this.props.user.hometown
    });
  },

  handleSubmit (e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[bio]", this.state.bio);
    formData.append("user[image]", this.state.imageFile);
    formData.append("user[is_landlord]", this.state.is_landlord);
    formData.append("user[hometown]", this.state.hometown);
    formData.append("user[username]", this.state.username);
    formData.append("user[id]", this.props.user.id);

    UserActions.updateUser(this.props.user.id, formData);
  },

  updateBio (e) {
    let bio = e.target.value;
    this.setState({bio: e.target.value});
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

  render () {

    return (
      <div className="edit-modal-wrapper">
        <div className="modal-background"></div>
        <form onSubmit={this.handleSubmit} className="edit-profile-form">
          <textarea
            className="bio-text"
            onChange={this.updateBio}
            value={this.state.bio}
            >
          </textarea>
          <input type="file" className="upload-button" onChange={this.updateFile}/>
          <input type="submit" className="button" value="submit"/>
        </form>
      </div>
    );
  }
});

module.exports = EditForm;
