import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .post("https://buffee-backend.vercel.app/")
      .then((res) => {
        setMovies(res.data.movies);
        // console.log(res.data.movies);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3.5,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {movies.map((value, index) => {
          const { poster_url, title } = value;
          return (
            <SwiperSlide key={index}>
              <img className="sliderImg" src={poster_url} alt={title} />
            </SwiperSlide>
            //  ...
          );
        })}
      </Swiper>
    </>
  );
};
export default Carousel;
