import {
  ROOT_CHANGE_CATEGORY,
  ROOT_CHANGE_SORT,
  ROOT_LIST_CATEGORIES,
  ROOT_LIST_POSTS,
  ROOT_DIALOG_POST_FORM
} from "./ActionsTypes";
import * as Api from "../utils/LeituraAPI.js";

export const rootChangeCategoryAction = (category, history) => {
  return dispatch => {
    dispatch({ type: ROOT_CHANGE_CATEGORY, payload: category });
    dispatch(rootListPostsAction(category));
    if (history) {
      history.push(`/${category}`);
    }
  };
};

export const rootChangeSortAction = sort => {
  return dispatch => {
    dispatch({ type: ROOT_CHANGE_SORT, payload: sort });
    dispatch(rootListPostsAction());
  };
};

export const rootListCategoriesAction = () => {
  return dispatch => {
    Api.getAllCategories().then(categories => {
      dispatch({ type: ROOT_LIST_CATEGORIES, payload: categories });
    });
  };
};

export const rootListPostsAction = categoryId => {
  return dispatch => {
    Api.getAllPosts().then(posts => {
      // eslint-disable-next-line
      posts.map(post => {
        Api.getAllCommentsByPostId(post.id).then(comments => {
          post.totalComments = comments.length;
          dispatch({ type: ROOT_LIST_POSTS, payload: posts });
        });
      });
    });
  };
};

export const rootOpenDialogAction = (openDialogState, isLoggedGoogle) => {
  if (!isLoggedGoogle) {
    alert('You must be logged in to post a new post');
    openDialogState = false;
  }
  return {
    type: ROOT_DIALOG_POST_FORM,
    payload: openDialogState
  };
};
