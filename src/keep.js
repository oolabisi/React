import React, { Component } from "react";
import "tachyons";
import axios from "axios";
import SearchBar from "./SearchBar";

// The Application class
class App extends Component {
  constructor() {
    super();
    this.state = {
      // This is use to build a link btw Search and the Movie api
      movie: [],
      searchfield: " "
    };
  }

  // This use Lifecycle to call the api (i.e. Rest API)
  componentDidMount() {
    axios
      .get(`http://www.omdbapi.com/?i=tt3896198&apikey=59e1ba94`)
      .then(Response => {
        return Response.json;
      })
      .then(movie => {
        return console.log(movie);
      })
      .catch(error => {
        return console.log(error);
      });
  }

  // This happens behind when the search button is clicked
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };
  // This sends a filtered request from Search to Omdb
  render() {
    const filteredMovie = this.state.movie.filter(movie => {
      return movie.title
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div>
        <h1>My Movie Place</h1>
        <SearchBar onClick={this.onClick} />
        <filteredMovie movie={filteredMovie} />
      </div>
    );
  }
}
