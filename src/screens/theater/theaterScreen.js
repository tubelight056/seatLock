import React, { useState, useRef, useEffect } from "react";
import movieDetails from "../../models/movieList";
import threaterList from "../../models/theater";
import { useNavigate, useParams } from "react-router-dom";
import "./theaterScreen.css";
import SlotCard from "../../components/slot/slotCard";

const TheaterScreen = (props) => {
  const theater = useRef(null);
  const movie = useRef(null);

  const history = useNavigate();
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

  const onpayloadClick = () => {
    localStorage.setItem("theater", id);
    history(`/theater/${id}/bill`, { replace: false });
  };

  return (
    <div>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${movie.current.trailer_yt}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1 className="titleh1">{theater.current.Name}</h1>
      <p className="address">{theater.current.locations}</p>
      <p className="lang">
        {" "}
        <span className="bold">Current show:</span> {movie.current.title}
      </p>
      <p className="lang">
        {" "}
        <span className="bold">Language :</span>{" "}
        {movie.current.original_language}
      </p>
      <p className="description">
        <span className="bold">Description :</span> {movie.current.overview}
      </p>
      <p className="date">
        <span className="bold">Date :</span>
        {movie.current.release_date}
      </p>
      <p className="vote">
        <span className="bold">Vote :</span> {movie.current.vote_average}
      </p>
      <p className="count">
        <span className="bold">Count :</span>
        {movie.current.vote_count}
      </p>
      <h1 className="titleh1">Select seats</h1>
      <div className="seatOuterBox">
        {
          theater.current.slots.map((slot, i) => (
            <div className="perSlot">
              <h5 className="SlotTitle">Slot {i + 1}:</h5>
              <SlotCard seat={slot} i={i + 1} />
            </div>
          ))
          // console.log(slot[line], slot[2], line);
          // return <SlotCard seat={slot[line]} />;
        }
      </div>
      <div className="btncontainer">
        <input
          className="btn"
          onClick={() => {
            onpayloadClick();
          }}
          type="button"
          value="Confirm"
        />
      </div>
    </div>
  );
};

export default TheaterScreen;
