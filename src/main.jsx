import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Feed from "./screens/Feed.jsx";
import Trendings from "./screens/Trendings.jsx";
import Player from "./screens/Player.jsx";
import Favorites from "./screens/Favorites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        //to show library page
        path: "/",
        element: <Home />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/trending",
        element: <Trendings />,
      },
      {
        path: "/player",
        element: <Player />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
  {},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
