import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import sortBy from "sort-by";
import { Route } from "react-router-dom";
import { ListPosts, CreatePost, Top } from "./components";
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
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

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

    return (
      <div>
        <FloatingActionButton className="add-postagem">
          <ContentAdd onClick={() => history.push("/create")} />
        </FloatingActionButton>
        <Route
          exact
          path="/"
          render={() => (
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
              />
            </div>
          )}
        />
        <Route
          path="/create"
          render={({ history }) => (
            <CreatePost
              onCreateContact={postagem => {
                this.incluirPostagem(postagem);
                history.push("/");
              }}
            />
          )}
        />
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
