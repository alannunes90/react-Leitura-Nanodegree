import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  getPostDetailAction,
  getAllCommentsByPostIdAction,
  postDetailOpenDialogCommentAction,
  postDetailCommentRemoveAction,
  postDetailCommentEditAction,
  postDetailCommentVoteAction
} from "../../actions/PostDetailActions";
import {
  postEditAction,
  postRemoveAction,
  postVoteAction
} from "../../actions/PostActions";
import moment from "moment";
import {
  AppBar,
  Toolbar,
  ToolbarTitle,
  ToolbarGroup,
  IconButton
} from "material-ui";
import { Link } from "react-router-dom";
import ActionNoteAdd from "material-ui/svg-icons/action/note-add";
import ActionDelete from "material-ui/svg-icons/action/delete";
import EditorModeEdit from "material-ui/svg-icons/editor/mode-edit";
import HardwareKeyboardArrowLeft from "material-ui/svg-icons/hardware/keyboard-arrow-left";
import { blue500 } from "material-ui/styles/colors";
import { Commentary, Votacao } from "../../components";
import PostFormView from "../post/PostFormView";
import CommentFromView from "../comment/CommentFormView";

class PostDetailFormView extends Component {
  componentDidMount() {
    let { PostEntity, history } = this.props;
    let postId = this.props.match.params.postId;
    this.props.getPostDetailAction(postId, this.props.history);
    this.props.getAllCommentsByPostIdAction(postId);

    if (PostEntity.error !== undefined) {
      alert("Sorry this post was not found.");
      history.push("/");
    }
  }

  render() {
    let {
      PostEntity,
      comments,
      postEditAction,
      postRemoveAction,
      postVoteAction,
      history,
      postDetailOpenDialogCommentAction,
      postDetailCommentVoteAction,
      postDetailCommentEditAction,
      postDetailCommentRemoveAction
    } = this.props;
    let { title, body, author, voteScore, timestamp } = PostEntity;
    return (
      <div>
        <AppBar
          title="Detail"
          iconElementLeft={
            <Link to="/">
              <IconButton>
                <HardwareKeyboardArrowLeft />
              </IconButton>
            </Link>
          }
          style={{ backgroundColor: "#aaa" }}
        />
        <Toolbar>
          <ToolbarGroup firstChild={false}>
            <ToolbarTitle text={`Vote Score: ${voteScore}`} />
            <ToolbarTitle text={`Total Comments: ${comments.length}`} />
          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton
              touch={true}
              tooltip="Edit Post"
              onClick={() => postEditAction(PostEntity)}
            >
              <EditorModeEdit />
            </IconButton>
            <IconButton
              touch={true}
              tooltip="Delete Post"
              onClick={() => postRemoveAction(PostEntity.id, history)}
            >
              <ActionDelete />
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
        <div className="post-details-container">
          <div className="post-details">
            <h1>{title}</h1>
            <hr />
            <div className="content-body">
              <div className="content-body-left">
                <Votacao post={PostEntity} postVoteAction={postVoteAction} />
              </div>
              <div className="content-body-right">
                <p>{body}</p>
                <small>
                  By: {author}, Date:{" "}
                  {moment(timestamp).format("DD/MM/YY HH:mm")}
                </small>
              </div>
            </div>
            <hr />
            <div id="comments">
              <h2>
                {comments.length} Answers
                <IconButton
                  touch={true}
                  tooltip="Add new comment"
                  onClick={() => postDetailOpenDialogCommentAction(true)}
                >
                  <ActionNoteAdd color={blue500} />
                </IconButton>
              </h2>
              {comments.map(c => (
                <Commentary
                  key={c.id}
                  CommentEntity={c}
                  handleVoteComment={postDetailCommentVoteAction}
                  handleEditComment={postDetailCommentEditAction}
                  handleRemoveComment={postDetailCommentRemoveAction}
                />
              ))}
            </div>
            <PostFormView fab={false} />
            <CommentFromView />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  PostEntity: state.PostDetailReducer.PostEntity,
  comments: state.PostDetailReducer.comments
});

export default withRouter(
  connect(mapStateToProps, {
    getPostDetailAction,
    getAllCommentsByPostIdAction,
    postDetailOpenDialogCommentAction,
    postDetailCommentRemoveAction,
    postEditAction,
    postRemoveAction,
    postVoteAction,
    postDetailCommentEditAction,
    postDetailCommentVoteAction
  })(PostDetailFormView)
);
