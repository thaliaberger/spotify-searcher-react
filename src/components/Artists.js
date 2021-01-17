import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import qs from "query-string";

import Nav from "./Nav";
import Footer from "./Footer";

function Artists(props) {
  const [state, setState] = useState([]);

  const search = props.match.params.search.replace(" ", "+");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestToken = btoa(
          `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`
        );

        const response = await axios.post(
          "https://accounts.spotify.com/api/token",
          qs.stringify({ grant_type: "client_credentials" }),
          {
            headers: {
              Authorization: "Basic " + requestToken,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const token = response.data.access_token;

        const artist = await axios.get(
          `https://api.spotify.com/v1/search?query=${search}&offset=0&limit=20&type=artist`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(artist);
        setState([...artist.data.artists.items]);
        console.log(state);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [props, search]);
  return (
    <div>
      <Nav />
      <div className="artists">
        {state ? (
          state.map((artist) => (
            <Link className="link" key={artist.id} to={`/albums/${artist.id}`}>
              <div className="info">
                <p>{artist.name}</p>
                {artist.images[0] ? (
                  <img
                    className="img"
                    src={artist.images[0].url}
                    alt="artist"
                  />
                ) : (
                  <></>
                )}
              </div>
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Artists;
