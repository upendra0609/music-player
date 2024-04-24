import axios from "axios";



export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:5173";

const clientId = "f539f3389ee64c9ea36e229289a691d5";

const scopes = [
  "user-library-read",
  "playlist-read-private",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
}


export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


// const apiClient = axios.create({
//   baseURL: "https://api.spotify.com/v1",
//   headers: {
//     Authorization: "Bearer " + localStorage.getItem("token"),
//     "Content-Type": "application/json",
//   },
// });

// export default apiClient;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

export const setClinetToken = (token) => {
  apiClient.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + token;
    return config;
  })
};

export default apiClient;