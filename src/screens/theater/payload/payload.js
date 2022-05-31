import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import movieDetails from "../../../models/movieList";
import "./payload.css";
import threaterList from "../../../models/theater";
const Payload = () => {
  let currentCount = JSON.parse(localStorage.getItem("current_register"));
  const [seats, setseats] = useState([...currentCount]);
  const theater = useRef(null);
  const movie = useRef(null);
  const user = useRef(null);

  user.current = JSON.parse(
    localStorage.getItem(sessionStorage.getItem("current"))
  );
  console.log(user.current);

  const { id } = useParams();

  for (let no in threaterList) {
    //   console.log(threaterList);
    if (threaterList[no].id === id) {
      theater.current = threaterList[no];
      console.log(theater.current);
      for (let movieno in movieDetails) {
        if (movieDetails[movieno].id === threaterList[no].movie_id) {
          movie.current = movieDetails[movieno];
          break;
        }
      }
    }
  }
  return (
    <div className="billbox">
      <div className="billinnerbox">
        <h1 className="billh1">Bill</h1>
        <p className="label">Seats</p>
        <ul>
          {seats.map((seat) => (
            <span className="seatss">{`L${seat.line}C${seat.column}`}</span>
          ))}
        </ul>
        <p>
          <span className="label">Theater:</span> {`${theater.current.Name} `}
        </p>
        <p>
          <span className="label">Movie: </span>
          {`${movie.current.title} `}
        </p>
        <p>
          <span className="label">Name: </span>
          {`${user.current.name} `}
        </p>
        <p>
          <span className="label">Email: </span>
          {`${sessionStorage.getItem("current")} `}
        </p>
        <div className="btncontainer">
          <input className="btn" type="button" value="Confirm" />
        </div>
      </div>
    </div>
  );
};

export default Payload;
