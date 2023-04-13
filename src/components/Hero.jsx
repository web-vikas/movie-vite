import React from "react";

import Genre_card from "./Genre_card";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__category">
        <div className="hero__category__title d-f ai-c jc-sb">
          <h2>category</h2>
          <a href="#" className="d-f ai-c">
            See All <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
        <div className="hero__category__ganreCards">
          <Genre_card emoji="😍" type={"Romance"} />
          <Genre_card emoji="😱" type={"Horror"} />
          <Genre_card emoji="😊" type={"comedy"} />
          <Genre_card emoji="😘" type={"Drama"} />
        </div>
      </div>
      <div className="hero__Carousel">
        <Carousel />
      </div>
    </div>
  );
};
export default Hero;
