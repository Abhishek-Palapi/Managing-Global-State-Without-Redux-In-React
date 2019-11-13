import React, { useEffect, useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "./Util";
import axios from "axios";
const MoviesList = () => {
  const [state, dispatch] = useStateValue();
  const [inputMovie, setInputMovie] = React.useState("");
  const movies = inputMovie.length > 0 ? state.searchedData : state.moviedata;
  useEffect(() => {
    const fecthData = async () => {
      const result = await axios("https://ghibliapi.herokuapp.com/films");
      dispatch({ type: "moviesData", data: result.data });
    };
    fecthData();
  }, [dispatch]);

  return useMemo(() => {
    const handleCardClick = movieData => {
      dispatch({ type: "selectedMovie", data: movieData });
      dispatch({ type: "showModal", data: true });
    };

    const handleInputChange = value => {
      let moviesData = [...state.moviedata];
      let newData = moviesData.filter(movie => {
        let title = movie.title.toLowerCase();
        return title.includes(value);
      });
      setInputMovie(value);
      dispatch({ type: "searchedData", data: newData });
    };
    return (
      <div className="GridConatiner">
        <h1>Movies</h1>
        <input
          value={inputMovie}
          placeholder={"search movies with title"}
          type="text"
          onChange={event => handleInputChange(event.target.value)}
        />
        <Grid container>
          {movies.map(movie => {
            return (
              <Grid
                item
                md={3}
                key={movie.title}
                onClick={() => handleCardClick(movie)}
              >
                <div className="card">
                  <p>Movie Title:{movie.title}</p>
                  <p>Movie Director:{movie.director}</p>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }, [dispatch, inputMovie, movies, state.moviedata]);
};
export default MoviesList;
