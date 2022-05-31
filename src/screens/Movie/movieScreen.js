import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieDetails from "../../models/movieList";
import "./movieScreen.css";
const MovieScreen = () => {
  const [movie, setmovie] = useState({});
  const { id } = useParams();
  console.log(id);

  setTimeout(() => {
    for (let movieno in movieDetails) {
      if (movieDetails[movieno].id === parseInt(id)) {
        setmovie(movieDetails[movieno]);
      }
    }
  }, [1000]);

  //   useEffect(() => {
  //     console.log(id);
  //     for (let movieno in movieDetails) {
  //       if (movieDetails[movieno].id === parseInt(id)) {
  //         setmovie(movieDetails[movieno]);
  //         console.log(movie);
  //       }
  //     }
  //   }, [1000]);

  return (
    <div>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${movie.trailer_yt}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1 className="titleh1">{movie.title}</h1>
      {/* <ul className="genres">
        {movie.genres.map((gene) => {
          console.log(movie);
          return <li className="gene">{gene}</li>;
        })}
      </ul> */}
      <p className="lang">
        {" "}
        <span className="bold">Language :</span> {movie.original_language}
      </p>
      <p className="description">
        <span className="bold">Description :</span> {movie.overview}
      </p>
      <p className="date">
        <span className="bold">Date :</span>
        {movie.release_date}
      </p>
      <p className="vote">
        <span className="bold">Vote :</span> {movie.vote_average}
      </p>
      <p className="count">
        <span className="bold">Count :</span>
        {movie.vote_count}
      </p>
      {/* <p className="director">Director : {movie.directors[0].name}</p> */}
    </div>
  );
};

export default MovieScreen;
