import React from "react";
import PropTypes from "prop-types";
import Votacao from "./Votacao";

export const Post = ({ post, history, postEditAction, postRemoveAction }) => {
  return (
    <div key={post.id}>
      <li key={post.id} className="postagem-list-item">
        <Votacao post={post} />
        <div
          className="postagem-details"
          onClick={() => history.push(`/${post.category}/${post.id}`)}
        >
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
        <div className="postagem-left">
          <span
            onClick={() => postEditAction(post, history)}
            className="postagem-left-editar"
            title="Edit post"
          />
          <br />
          <span
            onClick={() => postRemoveAction(post.id)}
            className="postagem-left-excluir"
            title="Delete post"
          />
        </div>
      </li>
    </div>
  );
};

Post.defaultProps = {
  post: {}
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};
