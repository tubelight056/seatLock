import React, { useState } from "react";
import movieDetails from "../../models/movieList";
import "./theater.css";

const TheaterCard = (props) => {
  const [movie, setmovie] = useState({});
  const id = props.theater.movie_id;
  console.log(id, props);

  setTimeout(() => {
    for (let movieno in movieDetails) {
      if (movieDetails[movieno].id === parseInt(id)) {
        setmovie(movieDetails[movieno]);
      }
    }
  }, [1]);
  return (
    <div className="outerTheaterCard">
      <h5
        className="title"
        onClick={() => {
          props.onTouchTheater(props.theater.id);
        }}
      >
        {props.theater.Name}
      </h5>
      <p
        className="movieTitle"
        onClick={() => {
          props.onTouch(movie.id);
        }}
      >
        {movie.title}
      </p>
      <p className="thisaddress">{props.theater.locations}</p>
    </div>
  );
};

export default TheaterCard;
