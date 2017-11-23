import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  Dialog,
  FlatButton,
  TextField,
  FloatingActionButton
} from "material-ui";
import ContentAdd from "material-ui/svg-icons/content/add";
import { Categories } from "../../components";
import { rootOpenDialogAction } from "../../actions/RootActions";
import {
  postHandleChangeAction,
  postChangeCategoryAction,
  postFormSaveAction,
  postFormCancelAction
} from "../../actions/PostActions";
import GoogleLogin from 'react-google-login';

class PostFormView extends Component {
  state = {
    loginGoogle: false,
    nameGoogle: ''
  }

  onResponseGoogleSuccess = (response) => {
    this.setState({ loginGoogle: true, nameGoogle: response.profileObj.name })
    this.props.PostEntity.author = response.profileObj.name;

    this.updateLocalStorage();
  }

  onResponseGoogleFailure = (response) => {
    this.setState({ loginGoogle: false });
    this.updateLocalStorage();
  }

  componentWillMount() {
    const storageLoginGoogle = window.localStorage.getItem('localStorageLoginGoogle') || false;
    const storageNameLoginGoogle = window.localStorage.getItem('localStorageNameLoginGoogle') || '[]';
    
    this.setState({
      loginGoogle: JSON.parse(storageLoginGoogle),
      nameGoogle: JSON.parse(storageNameLoginGoogle)
    });

    this.props.PostEntity.author = storageNameLoginGoogle.replace("\"", "").replace("\"", "");
  }

  /**
   * @description Atualiza local storage (localStorageLoginGoogle)
  */
  updateLocalStorage() {
    window.localStorage.setItem('localStorageLoginGoogle', JSON.stringify(this.state.loginGoogle));
    window.localStorage.setItem('localStorageNameLoginGoogle', JSON.stringify(this.state.nameGoogle));
  }

  render() {
    let { PostEntity, fieldsErros, openDialogState, fab } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onClick={() => this.props.postFormCancelAction()}
      />,
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onClick={() => this.props.postFormSaveAction(PostEntity)}
      />
    ];

    return (
      <div>
        {!this.state.loginGoogle && (
          <GoogleLogin
            className="login-google"
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.onResponseGoogleSuccess}
            onFailure={this.onResponseGoogleFailure}
          />
        )}
        {fab && (
          <FloatingActionButton className="add-postagem"
            onClick={() => this.props.rootOpenDialogAction(true, this.state.loginGoogle)}
          >
            <ContentAdd />
          </FloatingActionButton>
        )}
        <Dialog
          title={!PostEntity.id ? "New Post" : "Edit Post"}
          actions={actions}
          modal={true}
          open={openDialogState}
          onRequestClose={() => this.props.rootOpenDialogAction(false)}
          autoScrollBodyContent={true}
        >
          <div>
            <TextField
              name="title"
              hintText="Post title"
              floatingLabelText="Title"
              floatingLabelFixed={true}
              fullWidth={true}
              value={PostEntity.title}
              errorText={
                fieldsErros.find(text => text === "title")
                  ? "This field is required"
                  : ""
              }
              onChange={this.props.postHandleChangeAction}
            />
            <br />
            <TextField
              name="body"
              hintText="Post body"
              floatingLabelText="Body"
              floatingLabelFixed={true}
              multiLine={true}
              fullWidth={true}
              errorText={
                fieldsErros.find(text => text === "body")
                  ? "This field is required"
                  : ""
              }
              value={PostEntity.body}
              onChange={this.props.postHandleChangeAction}
            />
            <br />
            <TextField
              name="author"
              hintText="Post Author"
              floatingLabelText="Author"
              floatingLabelFixed={true}
              fullWidth={true}
              value={PostEntity.author}
              errorText={
                fieldsErros.find(text => text === "author")
                  ? "This field is required"
                  : ""
              }
              onChange={this.props.postHandleChangeAction}
            />
            <br />
            <Categories
              name="category"
              categories={this.props.categories}
              floatingLabelText="Categories"
              categorySelected={PostEntity.category}
              errorText={
                fieldsErros.find(text => text === "category")
                  ? "This field is required"
                  : ""
              }
              handleChange={this.props.postChangeCategoryAction}
            />
            <br />
          </div>
        </Dialog>
      </div>
    );
  }
}

PostFormView.defaultProps = {
  fab: true
};

const mapStateToProps = state => ({
  openDialogState: state.RootReducer.openDialogState,
  categories: state.RootReducer.categories,
  PostEntity: state.PostReducer.PostEntity,
  fieldsErros: state.PostReducer.fieldsErros
});

export default withRouter(
  connect(mapStateToProps, {
    rootOpenDialogAction,
    postHandleChangeAction,
    postChangeCategoryAction,
    postFormSaveAction,
    postFormCancelAction
  })(PostFormView)
);
