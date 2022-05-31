import React, { useState } from "react";
import Login from "../../components/Login/Login.js";
import Register from "../../components/Register/Register.js";
import "./authentication.css";
import { useNavigate } from "react-router-dom";
import imgs from "../../assert/1653465896455.jpg";
// import axios from "axios";
// import config from "../../url";

const Authentication = () => {
  const history = useNavigate();
  // const history = useHistory();
  // const histtory = useNavigation();
  const [typeOfAuth, setTypeOfAuth] = useState("login");
  const [errorMessage, seterrorMessage] = useState(null);
  // const [MousePosition, setMousePosition] = useState({
  //   left: 0,
  //   top: 0,
  // });

  const onErrorHandler = (data) => {
    seterrorMessage(data);

    setTimeout(() => {
      seterrorMessage(null);
    }, [5000]);
  };

  const onLoginHandler = async (loginData) => {
    console.log(loginData);
    if (localStorage.getItem(loginData.email.toLowerCase()) === null) {
      onErrorHandler("Invalid details");
    } else {
      let userDetails = JSON.parse(
        localStorage.getItem(loginData.email.toLowerCase())
      );
      if (userDetails.password === loginData.password) {
        sessionStorage.setItem("current", loginData.email.toLowerCase());
        history("/home", { replace: true });
      } else {
        onErrorHandler("Invalid password");
      }
    }
    // await axios
    //   .post(config.API_URL + "/user/login", {
    //     email: loginData.email,
    //     password: loginData.password,
    //   })
    //   .then(async (data) => {
    //     if (!data.data.status) {
    //       onErrorHandler(data.data.statusMessage);
    //     } else {
    //       sessionStorage.setItem("email", loginData.email);
    //       sessionStorage.setItem("name", data.data.name);
    //       sessionStorage.setItem("id", data.data.id);
    //       history.replace(`/${data.data.name}/home/${data.data.id}`);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const onRegisterHandler = async (Rdata) => {
    // console.log(Rdata);
    if (localStorage.getItem(Rdata.email.toLowerCase()) === null) {
      localStorage.setItem(
        Rdata.email.toLowerCase(),
        JSON.stringify({
          name: Rdata.name,
          password: Rdata.password,
        })
      );
      sessionStorage.setItem("current", Rdata.email.toLowerCase());
      history("/home", { replace: true });
    } else {
      onErrorHandler("user already exists");
    }
  };
  // await axios
  //   .post(config.API_URL + "/user/register", {
  //     email: Rdata.email.toLowerCase(),
  //     password: Rdata.password,
  //     name: Rdata.name,
  //   })
  //   .then(async (data) => {
  //     if (!data.data.status) {
  //       onErrorHandler(data.data.statusMessage);
  //     } else {
  //       sessionStorage.setItem("email", Rdata.email.toLowerCase());
  //       sessionStorage.setItem("name", data.data.name);
  //       sessionStorage.setItem("id", data.data.id);
  //       history.replace(`/${data.data.name}/home/${data.data.id}`);
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // function handleMouseMove(ev) {
  //   setMousePosition({ left: ev.pageX, top: ev.pageY });
  // }

  return (
    <div className="outerScreen">
      <div className="content">
        <h1 className="greetingh1">Welcome to seatlock</h1>
        {typeOfAuth === "login" ? (
          <Login
            callBack={(data) => {
              onLoginHandler(data);
            }}
            errorCallBack={(data) => {
              onErrorHandler(data);
            }}
          />
        ) : (
          <Register
            callBack={(data) => {
              onRegisterHandler(data);
            }}
            errorCallBack={(data) => {
              onErrorHandler(data);
            }}
          />
        )}
        <p
          className="formswitcherp"
          onClick={() => {
            setTypeOfAuth(typeOfAuth === "login" ? "signin" : "login");
          }}
        >
          {typeOfAuth === "login"
            ? "Don't you have account? Click Me"
            : "Do you have an account? click me"}
        </p>
        {errorMessage !== null && (
          <h1 className="errorMessageH1">{`${errorMessage}`}</h1>
        )}
      </div>
      {/* <div onMouseMove={(ev) => handleMouseMove(ev)} className="design">
        <h1 className="eascapeh1">You got a follower</h1>
        <div
          style={{
            left: MousePosition.left,
            top: MousePosition.top,
          }}
          className="circle"
        ></div> */}
      {/* </div> */}
      <img src={imgs} className="imgs" alt="background.img" />
    </div>
  );
};

export default Authentication;
