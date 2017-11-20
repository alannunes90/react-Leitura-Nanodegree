import React from "react";
import PropTypes from "prop-types";

export const Votacao = ({ post, postVoteAction }) => (
  <div className="postagem-vote">
    <span
      className="vote-up-off"
      title="This question shows research effort; it is useful and clear"
      onClick={() => postVoteAction(post.id, "upVote")}
    />
    <br />
    <span className="vote-count-post">{post.voteScore}</span>
    <br />
    <span
      className="vote-down-off"
      title="This question does not show any research effort; it is unclear or not useful"
      onClick={() => postVoteAction(post.id, "downVote")}
    />
  </div>
);

Votacao.defaultProps = {
  post: {}
};

Votacao.propTypes = {
  post: PropTypes.object.isRequired,
  postVoteAction: PropTypes.func.isRequired
};
