import React from "react";
import { Redirect, Route } from "react-router-dom";
import "./App.css";
import Clean from "./continer/Clean";
import Item from "./continer/Item";
import movieInsert from "./continer/MovieInsert";
import MovieList from "./continer/MovieList";
import movieList from "./continer/MovieList";
import MenuBar from "./page/MenuBar";

function App() {
  return (
    <div>
      <MenuBar />
      <Route path="/" exact={true} component={Clean} />
      <Route path="/movieList" exact={true} component={MovieList} />
      <Route path="/movieInsert" exact={true} component={movieInsert} />
      {/* <Route path="/test" exact={true} component={Item} /> */}
      {/* <Route path="/post/:id" exact={true} component={3} /> */}
      <Redirect path="*" to="/" />
    </div>
  );
}

export default App;
