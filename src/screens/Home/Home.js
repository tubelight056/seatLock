import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Movie from "./movie";
import Theater from "./theater";

const Home = (props) => {
  const [typeOfScreen, setTypeOfScreen] = useState("movie");
  const [errorMessage, seterrorMessage] = useState(null);
  const onErrorHandler = (data) => {
    seterrorMessage(data);

    setTimeout(() => {
      seterrorMessage(null);
    }, [5000]);
  };
  const onChangeScreenHandler = (data) => {
    setTypeOfScreen(data);
  };
  return (
    <div className="outerBox">
      <div className="innerbox">
        <Navbar
          active={typeOfScreen}
          changeScreen={(data) => {
            onChangeScreenHandler(data);
          }}
        />
      </div>
      {typeOfScreen === "movie" ? <Movie /> : <Theater />}
      {errorMessage !== null && (
        <h1 className="errorMessageH1">{`${errorMessage}`}</h1>
      )}
    </div>
  );
};

export default Home;
