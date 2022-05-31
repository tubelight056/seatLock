import React, { useState } from "react";
import MovieCard from "../../components/moviecard/MovieCard";
import movieDetails from "../../models/movieList";
import "./movie.css";
import { useNavigate } from "react-router-dom";
const Movie = () => {
  const [movieName, setmovieName] = useState();
  const [movieList, setMovieLlist] = useState([...movieDetails]);
  const history = useNavigate();
  const onClickHandler = (data) => {
    history(`/movie/${data}`, { replace: false });
  };
  const onMovieNameHandler = (data) => {
    setmovieName(data);
    let tempMovieDetails = [];
    if (movieName.length === 0) {
      setMovieLlist([...movieDetails]);
    }
    movieList.forEach((movie) => {
      if (
        data.toLowerCase() === movie.title.slice(0, data.length).toLowerCase()
      )
        tempMovieDetails.push(movie);
      setMovieLlist([...tempMovieDetails]);
    });
  };
  return (
    <div className="outerMovieBox">
      <div className="innerMovieBox">
        <div className="searchbox">
          <label htmlFor="Name" className="label">
            Search By Name :
          </label>
          <input
            type="text"
            name="Name"
            onChange={(e) => {
              onMovieNameHandler(e.target.value);
            }}
          />
        </div>
        <div className="list">
          {movieList.map((movie) => (
            <MovieCard
              movie={movie}
              onTouch={(data) => {
                onClickHandler(data);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
