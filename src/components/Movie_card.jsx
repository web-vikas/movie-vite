import React from "react";

const Card = (props) => {
  const cardImage = {
    backgroundImage: `url(${props.src})`,
    width: "150px",
    height: "220px",
    borderRadius: "10px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "cover",
  };

  return <div className="card" style={cardImage}></div>;
};

export default Card;
