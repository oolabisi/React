import React, { useReducer, useEffect } from "react";
import Movie from "./movie";
import Searchbar from "./SearchBar";

const MOVIE_API_URL = "https://www.omdbapi.com/apikey=59e1ba94";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=59e1ba94`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;
  return (
    <div className="tc ma2">
      <h1 className="f2 br-pill bg-orange courier i white">
        Welcome to Olabisi Movie Place
      </h1>
      <div className="f5 br-pill orange no-underline ba pv1 ph1 dib">
        <Searchbar search={search} />
      </div>
      <div>
        {loading && !errorMessage ? (
          <span> </span>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
      <div>
        <p className="bg-orange br-pill ma7 tc i white">
          powered by Expressjs.
        </p>
      </div>
    </div>
  );
};
export default App;
