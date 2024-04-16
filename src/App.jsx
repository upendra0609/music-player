import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className={styles.mainBody}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.screenContainer}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
