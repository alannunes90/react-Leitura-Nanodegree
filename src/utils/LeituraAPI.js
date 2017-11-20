const api = "http://localhost:3001";

/**
* @description Generate a unique token for storing your bookshelf data on the backend server.
*/
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
}

/**
* @description Headers
*/
const headers = {
  Accept: "application/json",
  Authorization: token
};

/**
* @description List all categories
* @returns {array} Return all categories
*/
export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

/**
* @description List posts by categories
* @param {number} category
* @returns {array} Return list of posts
*/
export const getPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers }).then(res => res.json());

/**
* @description List all posts
* @returns {array} Return all posts
*/
export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers }).then(res => res.json());

/**
* @description List post details
* @param {number} Id
* @returns {array} Return post details
*/
export const getPostsDetail = Id =>
  fetch(`${api}/posts/${Id}`, { headers }).then(res => res.json());

/**
* @description Save post
* @param {object} PostEntity
* @returns {object} Return post 
*/
export const savePost = PostEntity =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(PostEntity)
  }).then(res => res.json());

/**
* @description Edit post
* @param {object} PostEntity
* @returns {object} Return post 
*/
export const editPost = PostEntity =>
  fetch(`${api}/posts/${PostEntity.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(PostEntity)
  }).then(res => res.json());

/**
* @description Remove post
* @param {number} post_id
* @returns {object} Return bool 
*/
export const removePost = post_id =>
  fetch(`${api}/posts/${post_id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());

/**
* @description Vote post
* @param {number} post_id
* @param {string} voteOption
* @returns {object} Return vote option 
*/
export const votePost = (post_id, voteOption) =>
  fetch(`${api}/posts/${post_id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(voteOption)
  }).then(res => res.json());

/**
* @description List all comments by post id 
* @param {number} post_id
* @returns {array} Return all comments of post 
*/
export const getAllCommentsByPostId = post_id =>
  fetch(`${api}/posts/${post_id}/comments`, { headers }).then(res =>
    res.json()
  );

/**
* @description List details comments
* @param {number} comment_id
* @returns {array} Return details comments of post 
*/
export const getCommentDetail = comment_id =>
  fetch(`${api}/comments/${comment_id}`, { headers }).then(res => res.json());

/**
* @description Save comments
* @param {number} CommentEntity
* @returns {object} Return comments
*/
export const saveComment = CommentEntity =>
  fetch(`${api}/comments`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(CommentEntity)
  }).then(res => res.json());

/**
* @description Edit comments
* @param {number} CommentEntity
* @returns {object} Return comments
*/
export const editComment = CommentEntity =>
  fetch(`${api}/comments/${CommentEntity.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(CommentEntity)
  }).then(res => res.json());

/**
* @description Delete comments
* @param {number} comment_id
* @returns {bool} Return bool
*/
export const deleteComment = comment_id =>
  fetch(`${api}/comments/${comment_id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());

/**
* @description Vote comments
* @param {number} comment_id
* @param {string} voteOption
* @returns {object} Return vote option
*/
export const voteComment = (comment_id, voteOption) =>
  fetch(`${api}/comments/${comment_id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(voteOption)
  }).then(res => res.json());
