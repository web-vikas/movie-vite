import React from "react";

const Genre = (props) => {
  return (
    <figure className="genre_card">
      <div className="d-f ai-c jc-c">{props.emoji}</div>
      <figcaption>{props.type}</figcaption>
    </figure>
  );
};

export default Genre;
