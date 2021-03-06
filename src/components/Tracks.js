import React, { useState, useEffect } from "react";
import axios from "axios";
import qs from "query-string";

import Nav from "./Nav";
import Footer from "./Footer";

function Tracks(props) {
  const [state, setState] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestToken = btoa(
          "9582ce1bdce64a6388d648f3ae57ab64:c51adca4ac7d454592fec31b707db6f1"
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

        const tracks = await axios.get(
          `https://api.spotify.com/v1/albums/${id}/tracks`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(tracks.data.items);
        setState([...tracks.data.items]);
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
      <div className="container">
        {state.map((track) => (
          <div className="tracks" key={track.id}>
            <p>{track.name}</p>
            <div>
              <audio controls>
                <source src={track.preview_url} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Tracks;
