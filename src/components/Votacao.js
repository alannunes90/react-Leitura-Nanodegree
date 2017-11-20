import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { postVoteAction } from "../actions/PostActions";

class Votacao extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  render() {
    const { post } = this.props;

    return (
      <div className="postagem-vote">
        <span
          className="vote-up-off"
          title="This question shows research effort; it is useful and clear"
          onClick={() => this.props.postVoteAction(post.id, "upVote")}
        />
        <br />
        <span className="vote-count-post">{post.voteScore}</span>
        <br />
        <span
          className="vote-down-off"
          title="This question does not show any research effort; it is unclear or not useful"
          onClick={() => this.props.postVoteAction(post.id, "downVote")}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default withRouter(
  connect(mapStateToProps, {
    postVoteAction
  })(Votacao)
);
