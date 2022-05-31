import React, { useState } from "react";
import threaterList from "../../models/theater";
import "./theater.css";
import TheaterCard from "../../components/theaterCard/theaterCard";
import { useNavigate } from "react-router-dom";

const Theater = () => {
  const history = useNavigate();
  const [theaterList, settheaterList] = useState([...threaterList]);
  // const [theater, settheater] = useState();
  const onClickHandler = (data) => {
    history(`/movie/${data}`, { replace: false });
  };
  const onClickTheaterHandler = (data) => {
    history(`/theater/${data}`, { replace: false });
  };
  const onTheaterNameHandler = (data) => {
    // console.log(data);
    // settheater(data);
    let tempMovieDetails = [];
    if (theaterList.length === 0) {
      settheaterList([...threaterList]);
    }
    threaterList.forEach((threater) => {
      if (
        data.toLowerCase() === threater.Name.slice(0, data.length).toLowerCase()
      )
        tempMovieDetails.push(threater);
      settheaterList([...tempMovieDetails, threater]);
    });
  };
  return (
    <div className="outerBoxTheater">
      <div className="innerBoxTheater">
        <div className="searchbox">
          <label htmlFor="Name" className="label">
            Search By Name :
          </label>
          <input
            type="text"
            name="Name"
            onChange={(e) => {
              onTheaterNameHandler(e.target.value);
              console.log(e);
            }}
          />
        </div>
        <div className="list">
          {theaterList.map((theater) => (
            <TheaterCard
              theater={theater}
              onTouch={(data) => {
                onClickHandler(data);
              }}
              onTouchTheater={(data) => {
                onClickTheaterHandler(data);
              }}
            />

            // <MovieCard
            //   movie={movie}
            //   onTouch={(data) => {
            //     onClickHandler(data);
            //   }}
            // />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theater;
