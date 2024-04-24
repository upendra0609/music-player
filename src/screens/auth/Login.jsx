import React from "react";
import style from "./Login.module.css";
import { loginUrl } from "../../spotify/spotify";

const Login = () => {
  return (
    <div className={style.login}>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
