import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const RandomYoutube = ({randoms}) => {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${randoms.id.videoId}`}>
        <img src={randoms.snippet.thumbnails.medium.url} alt={randoms.snippet.description} />
      </a>
    </li>
  );
};

const YoutubeSlider = ({randoms}) => {
  return (
    <section className="youtube__list">
      <div className="container">
        <div className="youtube__box">
          <ul className="youtube__random">
            <h2>Playlist For You</h2>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
              {randoms.map((randoms, index) =>
                index < 10 ? (
                  <SwiperSlide key={index}>
                    <RandomYoutube key={index} randoms={randoms} />
                  </SwiperSlide>
                ) : null
              )}
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSlider;