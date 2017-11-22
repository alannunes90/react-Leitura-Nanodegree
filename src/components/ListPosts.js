import React from "react";
import PropTypes from "prop-types";
import { Post } from "./Post";

export const ListPosts = ({
  posts,
  history,
  postEditAction,
  postRemoveAction,
  postVoteAction
}) => {
  return (
    <div className="list-postagens">
      <ol className="postagem-list">
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
            history={history}
            postEditAction={postEditAction}
            postRemoveAction={postRemoveAction}
            postVoteAction={postVoteAction}
          />
        ))}
      </ol>
    </div>
  );
};

ListPosts.defaultProps = {
  posts: []
};

ListPosts.propTypes = {
  posts: PropTypes.array.isRequired
};
