import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

// import SpotifyWebApi from "spotify-web-api-node";

import Homepage from "./components/Homepage";
import Artists from "./components/Artists";
import Albums from "./components/Albums";
import Tracks from "./components/Tracks";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/:search" component={Artists} />
          <Route exact path="/albums/:id" component={Albums} />
          <Route exact path="/tracks/:id" component={Tracks} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
