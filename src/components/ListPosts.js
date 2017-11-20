import React from "react";
import PropTypes from "prop-types";
import Votacao from "./Votacao";

export const ListPosts = ({
  posts,
  history,
  handleVotePost,
  handleEditPost,
  handleDeletePost
}) => {
  return (
    <div className="list-postagens">
      <ol className="postagem-list">
        {posts.map(post => (
          <div key={post.id}>
            <li key={post.id} className="postagem-list-item">
              <Votacao numVotos={post.voteScore} />
              <div className="postagem-details"
            onClick={() => history.push(`/${post.category}/${post.id}`)}>
                <p>{post.title}</p>
                <p>{post.body}</p>
              </div>
              <div className="postagem-left">
                <span
                  onClick={() => handleEditPost(post)}
                  className="postagem-left-editar"
                  title="Editar postagem!"
                />
                <br />
                <span
                  onClick={() => handleDeletePost(post.id)}
                  className="postagem-left-excluir"
                  title="Excluir a postagem!"
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
