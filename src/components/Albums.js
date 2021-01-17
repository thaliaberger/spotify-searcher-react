import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import qs from "query-string";

import Nav from "./Nav";
import Footer from "./Footer";

function Albums(props) {
  const [state, setState] = useState([]);

  const id = props.match.params.id;

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

        const albums = await axios.get(
          `https://api.spotify.com/v1/artists/${id}/albums`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(albums.data.items);
        setState([...albums.data.items]);
      } catch (err) {
        console.error(err);
      }
    };
    console.log(state);
    fetchData();
  }, [props]);
  return (
    <div>
      <Nav />
      <div className="artists">
        {state ? (
          state.map((artist) => (
            <Link className="link" key={artist.id} to={`/tracks/${artist.id}`}>
              <div className="info">
                <p>{artist.name}</p>
                <img
                  className="img"
                  src={artist.images[0].url}
                  alt="album cover"
                />
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

export default Albums;
