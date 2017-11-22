import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import sortBy from "sort-by";
import { ListPosts, Top } from "./components";
import {
  rootChangeCategoryAction,
  rootChangeSortAction,
  rootListCategoriesAction,
  rootListPostsAction,
  rootOpenDialogAction
} from "./actions/RootActions";
import {
  postEditAction,
  postRemoveAction,
  postVoteAction
} from "./actions/PostActions";
import PostFormView from "./views/post/PostFormView";

class App extends Component {
  componentDidMount() {
    this.props.rootListCategoriesAction();
    this.props.rootChangeCategoryAction("all");
  }
  render() {
    let {
      history,
      posts,
      categories,
      categorySelected,
      sortSelected
    } = this.props;
console.dir(posts);
    return (
      <div>
        <Top
          title="Project of Reading"
          history={history}
          categories={categories}
          categorySelected={categorySelected}
          sortSelected={sortSelected}
          handleChangeCategory={this.props.rootChangeCategoryAction}
          handleChangeSort={this.props.rootChangeSortAction}
        />
        <ListPosts
          posts={posts}
          history={history}
          postEditAction={this.props.postEditAction}
          postRemoveAction={this.props.postRemoveAction}
          postVoteAction={this.props.postVoteAction}
        />
        <div className="add-postagem">
          <PostFormView />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categorySelected: state.RootReducer.categorySelected,
  sortSelected: state.RootReducer.sortSelected,
  categories: state.RootReducer.categories,
  posts:
    state.RootReducer.categorySelected !== "all"
      ? state.RootReducer.posts.filter(
          p => !p.deleted && p.category === state.RootReducer.categorySelected
        )
      : state.RootReducer.posts
          .filter(p => !p.deleted)
          .sort(sortBy(state.RootReducer.sortSelected)),
  openDialogState: state.RootReducer.openDialogState
});

export default withRouter(
  connect(mapStateToProps, {
    rootChangeCategoryAction,
    rootChangeSortAction,
    rootListCategoriesAction,
    rootListPostsAction,
    rootOpenDialogAction,
    postVoteAction,
    postEditAction,
    postRemoveAction
  })(App)
);
