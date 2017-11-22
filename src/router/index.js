import React from "react";
import { Route, Switch } from "react-router-dom";
import PostDetailView from "../views/post/PostDetailView";
import { Error404 } from "../views/error/Error404";
import App from "../App";

export const RouterApp = ({ location }) => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/:category" component={App} />
    <Route exact path="/:category/:postId" component={PostDetailView} />
    <Route render={() => <Error404 location={location} />} />
  </Switch>
);
