import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import AlbumDetail from "./Pages/AlbumDetail";

export default props => {
  const { onHandlePlayer,
          trackNum,
          pauseToggle,
          onHandlePause,
          trackAlbumId
         } = props;
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/album/:id" 
        render={
          props => 
          <AlbumDetail 
            id={props.match.params.id}
            onHandlePlayer={onHandlePlayer}
            onHandlePause={onHandlePause}
            trackNum={trackNum}
            pauseToggle={pauseToggle}
            trackAlbumId={trackAlbumId}
            />
          }
        />
    </ Switch>
  )
};
