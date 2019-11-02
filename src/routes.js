import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import AlbumDetail from "./Pages/AlbumDetail";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route pat="/album/:id">
        <AlbumDetail />
      </Route>
    </ Switch>
  )
};
