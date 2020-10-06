import React, { useEffect, useState } from "react";
// import Item from "./Item";
import "../card.css";

const MovieList = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    mo();
  }, []);

  function mo() {
    fetch("http://10.100.102.2:8000/api/movie")
      .then((movie) => movie.json())
      .then((movie) => {
        setMovie(movie);
        console.log(movie[0]);
      });
  }

  return (
    <div>
      {movies.map((movie) => (
        <div class="card">
          <div class="btn_g">
            <button class="btn_1 btn">수정</button>
            <button class="btn_2 btn">삭제</button>
          </div>
          {/* <div class="card-header" style={{ backgroundImage: {movie.medium_cover_image} }}> */}
          <div class="card-header" style={{ backgroundImage: "" }}>
            <div class="card-header-is_closed">
              <div class="card-header-text"> 평점 </div>
              <div class="card-header-number"> {movie.rating} </div>
            </div>
          </div>
          <div class="card-body">
            <div class="card-body-header">
              <h1>{movie.title}</h1>
              <p class="card-body-hashtag">여긴 머넣지?</p>
              <p class="card-body-nickname"> 게시번호 : {movie.id}</p>
            </div>
            <p class="card-body-description">{movie.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
