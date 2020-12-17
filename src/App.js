import React, { Component } from "react";
import Routes from './routes';

import "./style.css";

import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Umbler listening on port %s', port);
});

export default App; 
