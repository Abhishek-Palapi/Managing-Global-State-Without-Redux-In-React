import React from "react";
import MoviesList from "./Movies";
import Movie from "./Movie";
import "./App.css";

function App() {
	console.log('hiii')
  return (
    <div className="App">
      <MoviesList />
      <Movie />
    </div>
  );
}

export default App;
