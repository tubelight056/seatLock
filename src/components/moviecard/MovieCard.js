import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div
      className="outerMovieCard"
      onClick={() => {
        props.onTouch(props.movie.id);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w45${props.movie.poster_path}`}
        alt={props.movie.title}
        className={"poster"}
      />
      <h5 className="title">{props.movie.title}</h5>
      <p className="voteRating">{props.movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
