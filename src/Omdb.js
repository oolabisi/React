//const KEY = "59e1ba94";
//import React, { Component } from "react";
import axios from "axios";

export default axios.create({
  baseURL: "http://www.omdbapi.com/?i=tt3896198&apikey=59e1ba94",
  responseType: "json"
});
