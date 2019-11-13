import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateWrapper } from "./Util";
import * as serviceWorker from "./serviceWorker";
const IntialState = {
  moviedata: [],
  selectedMovie: [],
  showModal: false,
  searchedData: []
};
function reducer(state, action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case "moviesData":
      return {
        ...state,
        moviedata: action.data
      };
    case "selectedMovie":
      return {
        ...state,
        selectedMovie: action.data
      };
    case "showModal":
      return {
        ...state,
        showModal: action.data
      };
    case "searchedData":
      return {
        ...state,
        searchedData: action.data
      };
    default:
      return state;
  }
}
ReactDOM.render(
  <StateWrapper initialState={IntialState} reducer={reducer}>
    <App />
  </StateWrapper>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
