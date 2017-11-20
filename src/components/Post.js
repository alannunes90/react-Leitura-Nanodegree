import React, { Component } from "react";
import PropTypes from "prop-types";
import { Votacao } from "../components";
import { IconButton } from "material-ui";
import ActionDelete from "material-ui/svg-icons/action/delete";
import EditorModeEdit from "material-ui/svg-icons/editor/mode-edit";
import EditorInsertInvitation from "material-ui/svg-icons/editor/insert-invitation";
import moment from "moment";
import { grey500 } from "material-ui/styles/colors";

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  render() {
    const {
      post,
      history,
      postEditAction,
      postRemoveAction,
      postVoteAction
    } = this.props;
    return (
      <div key={post.id}>
        <li key={post.id} className="postagem-list-item">
          <Votacao post={post} postVoteAction={postVoteAction} />
          <div
            className="postagem-details"
            onClick={() => history.push(`/${post.category}/${post.id}`)}
          >
            <p>{post.title}</p>
            <p>
              <span>
                <EditorInsertInvitation color={grey500} />
                {moment(post.timestamp).format("DD/MM/YY HH:mm")}
                , {post.author}
                , Total comments: {post.totalComments}
              </span>
              <br />
              {post.body.substring(0, 100)}
            </p>
          </div>
          <div className="postagem-left">
            <IconButton
              className="postagem-left-icon"
              touch={true}
              tooltip="Edit Post"
              onClick={() => postEditAction(post)}
            >
              <EditorModeEdit />
            </IconButton>
            <br />
            <IconButton
              className="postagem-left-icon"
              touch={true}
              tooltip="Delete Post"
              onClick={() => postRemoveAction(post.id, history)}
            >
              <ActionDelete />
            </IconButton>
          </div>
        </li>
      </div>
    );
  }
}

export default Post;
