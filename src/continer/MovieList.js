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

  function del(id) {
    fetch("http://10.100.102.2:8000/api/movie" + id, {
      method: "delete",
    })
      .then((movie) => movie.text())
      .then((movie) => {
        if (movie === "ok") {
          setMovie(movies.filter((movie) => movie.id !== id));
          console.log("삭제됨");
        }
      });
  }

  return (
    <div>
      {movies.map((movie) => (
        <div className="card">
          <div className="btn_g">
            <button className="btn_1 btn">수정</button>
            <button className="btn_2 btn" onClick={() => del(movie.id)}>
              삭제
            </button>
          </div>
          <div
            class="card-header"
            // style={{ backgroundImage: "url(" + movie.medium_cover_image + ")" }}
            style={{ backgroundImage: `url(${movie.medium_cover_image})` }}
          >
            <div className="card-header-is_closed">
              <div className="card-header-text"> 평점 </div>
              <div className="card-header-number"> {movie.rating} </div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-body-header">
              <h1>{movie.title}</h1>
              <p className="card-body-hashtag">여긴 머넣지?</p>
              <p className="card-body-nickname"> 게시번호 : {movie.id}</p>
            </div>
            <p className="card-body-description">{movie.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
