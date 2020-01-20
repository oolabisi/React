import React, { Component } from "react";

class MovieAll extends Component {
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

  render() {}
}
