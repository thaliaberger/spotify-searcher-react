import React, { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

function Homepage() {
  const [state, setState] = useState({ artist: "" });

  function handleChange(event) {
    setState({ artist: event.currentTarget.value });
    console.log(state.artist);
  }
  return (
    <div>
      <Nav />
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
