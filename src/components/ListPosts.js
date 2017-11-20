import React from "react";
import PropTypes from "prop-types";
import Votacao from "./Votacao";
import Post from "./Votacao";

export const ListPosts = ({
  posts,
  history,
  postEditAction,
  postRemoveAction
}) => {
  return (
    <div className="list-postagens">
      <ol className="postagem-list">
        {posts.map(post => (
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
