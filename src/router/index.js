import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import RootView from '../views/root/RootView';
// import PostDetailView from '../views/post/PostDetailView';
import { Error404 } from '../views/error/Error404';
import App from "../App";

class RouterApp extends Component {
    render() {
        let { location } = this.props;
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/:category" component={App} />
                <Route render={() => <Error404 location={location} />} />
            </Switch>
        )
    }
}
export default RouterApp