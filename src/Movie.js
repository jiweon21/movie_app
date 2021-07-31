import React from "react";

function Movie({ id, year, title, summary, poster }) {
  return (
    <>
      <h4>{title}</h4>
      <h4>{year}</h4>
      <h4>{summary}</h4>
      <h4>{poster}</h4>
    </>
  );
}

export default Movie;
