import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./screens/auth/Login";
import { getTokenFromUrl, setClinetToken } from "./spotify/spotify";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClinetToken(_token);
    } else {
      setToken(token);
      setClinetToken(token);
    }
  }, []);

  return (
    <>
      <div className={styles.screen}>
        {token ? (
          <div className={styles.container}>
            {/* <div className={styles.mainBody}> */}
            <div className={styles.sidebar}>
              <Sidebar />
              {/* </div> */}
            </div>
            <div className={styles.screenContainer}>
              <Outlet />
            </div>
          </div>
        ) : (
          // </>
          // <>
          <Login />
          // </>
        )}
      </div>
    </>
  );
}

export default App;
