import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div>
      <ul>
        <Link to="/">초기화면</Link>
        <br />
        <Link to="/movieList">영화 목록</Link>
        <br />
        <Link to="/movieInsert">영화 추가</Link>
        <br />
        <Link to="/test">테스트용 공간</Link>
        <hr />
      </ul>
    </div>
  );
};

export default MenuBar;
