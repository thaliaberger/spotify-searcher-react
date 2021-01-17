import React, { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";

import boy from "./images/boy.png";

function Homepage() {
  const [state, setState] = useState({ artist: "" });

  function handleChange(event) {
    setState({ artist: event.currentTarget.value });
    console.log(state.artist);
  }
  return (
    <div className="center">
      <h1>Spotify Searcher</h1>
      <img className="boy" src={boy} alt="boy seated and listenin to music" />
      <div className="input">
        <div className="input-background">
          <div>
            <input
              onChange={handleChange}
              className="input"
              type="text"
              placeholder="Search for an artist..."
              name="search"
            />
          </div>
          <div className="button">
            <Link className="search" to={state.artist}>
              Search
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
